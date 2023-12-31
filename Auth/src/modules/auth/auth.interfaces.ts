/** ИНТЕРФЕЙС - АУТЕНТИФИКАЦИЯ ПОЛЬЗОВАТЕЛЯ
 * Заполняется формой аутентификации
 *   login:       string  - логин пользователя (обязательный параметр)
 *   password:    string  - пароль пользователя (обязательный параметр)
 *
 * Обязательным является только поля login, password
 */
export interface IUSerAuth {
	login: string;
	password: string;
}
