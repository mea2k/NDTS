import {
	of,
	from,
	timer,
	range,
	take,
	forkJoin,
	interval,
	delayWhen,
	combineLatest,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

// исправление ошибки ajax.getJson()
(global as any).XMLHttpRequest = require('xhr2');


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// ЗАДАНИЕ 1
// Вывод чисел из одного потока с задержкой
const f1 = (f2: any = null) => {
	console.log('Start timers...')
	const timerOne = range(10);//.merge(empty().pipe(startWith(1), delay(1000)));
	const timerX = interval(1000);
	const timerTwo = interval(1000).pipe(take(15));
	const timerThree = timer(3000, 4000).pipe(take(4));

	const higherOrder = timerOne.pipe(
		// случайная задержка от 0 до 5 сек
		// у каждого элемента range(0..10)
		delayWhen(() => interval(Math.random() * 5000))
		//map(() => forkJoin(timerX.pipe(take(1)))),
	);

	const result = higherOrder;

	result.subscribe({
		// вывод очередного элемента на экран
		next: console.log,
		// запуск следующей функции, если она есть
		complete: f2 || function () { console.log('Finished') }
	});
}

///////////////////////////////////////////////////////////////////////////////

// ЗАДАНИЕ 2
// HTTP-запросы к нескольким источникам
const f2 = (f3: any = null) => {
	console.log('Start urls request...')

	// массив URL-запросов
	const urls = [
		'https://api.github.com/search/repositories?q=rxjs&per_page=1',
		'https://cataas.com/cat?json=true',
		'http://httpbin.org/delay/2'		// задержка в 2 сек
	]

	// создаем потоки из URL-запросов 
	const requests = urls.map(url => ajax.getJSON(url));
	// Объединяем результаты - возвращаем подписчику только когда
	// все результаты получены
	const allIn1$ = combineLatest(requests).pipe(
		// не нужно - и так работает
		//combineLatestAll(res=>res)
	);
	// Альтернатива - тоже выдает все последние полученные результаты,
	// когда все потоки завершены
	const allIn2$ = forkJoin(requests)


	allIn2$.subscribe({
		next: console.log,
		complete: f3 || function () { console.log('Finished') }
	})
}



///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Запуск функций
f1(f2);