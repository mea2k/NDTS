import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { UserStorageFile } from './storage/userStorageFile';
import { IUSer, IUSerDto, USERS_STORAGE } from './users.interfaces';

@Injectable()
export class UsersService {
	//private readonly _storage: BookStorageDb | BookStorageFile;

	constructor(
		config: ConfigService,
		@Inject(USERS_STORAGE)
		private readonly _storage: UserStorageFile, // | UserStorageDb,
	) {
		//console.log('USERS_SERVICE - constructor');
	}

	/** ПОЛУЧЕНИЕ СПИСКА ВСЕХ ПОЛЬЗОВАТЕЛЕЙ
	 * @returns Promise<список пользователей в формате JSON ([{...}, {...}, ...])>
	 */
	getAll() {
		return this._storage.getAll();
	}

	/** ПОЛУЧЕНИЕ ИНФОРМАЦИИ ПО ВЫБРАННОМУ ПОЛЬЗОВАТЕЛЮ
	 * @params {string} id - ID пользователя
	 * @returns Promise<информация о пользователе в формате JSON {...}>
	 */
	get(id: number) {
		return this._storage.get(Number(id));
	}

	/** ДОБАВЛЕНИЕ НОВОго ПОЛЬЗОВАТЕЛЯ
	 * @constructor
	 * @params {JSON} параметры нового пользователя (email, login, firstName, password1, password2)
	 * @returns Promise<сам добавленный объект в формате JSON ({...})>
	 */
	create(item: IUSerDto) {
		return this._storage.create(item);
	}

	/** ИЗМЕНЕНИЕ ПАРАМЕТРОВ ПОЛЬЗОВАТЕЛЯ
	 * @constructor
	 * @params {string} id - ID пользователя
	 * @params {JSON} новые параметры (email, login, firstName, pawwsord1, password2)
	 * @returns Promise<измененный объект в формате JSON ({...})>
	 */
	update(id: number, item: IUSerDto) {
		return this._storage.update(Number(id), item);
	}

	/** УДАЛЕНИЕ ВЫБРАННОГО ПОЛЬЗОВАТЕЛЯ
	 * @constructor
	 * @params {String} id   - ID пользователя
	 * @returns Promise<bool>
	 */
	delete(id: number) {
		return this._storage.delete(Number(id));
	}

	///////////////////////////////////////////////////////////////////////////
	// СПЕЦИФИЧЕСКИЕ МЕТОДЫ
	///////////////////////////////////////////////////////////////////////////

	/** АУТЕНТИФИКАЦИЯ ПОЛЬЗОВАТЕЛЯ
	 * @constructor
	 * @params {IUserDto} item    - данные аутентификации из формы
	 *
	 * @returns Promise<bool>
	 */
	getByLogin(login: IUSerDto['login']): Promise<IUSer | null> {
		return this._storage.getByLogin(login);
	}
}
