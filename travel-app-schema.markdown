# Схема приложения для создания туристических маршрутов

## 1. Пользовательский интерфейс (UI)

### 1.1. Экран 1: Главный экран (Main Screen)
**Описание**: Начальный экран для поиска и фильтрации достопримечательностей. Для авторизованных пользователей отображает сохранённые маршруты.
**Элементы**:
- **Поисковая строка**: Поиск по названию достопримечательности.
- **Фильтры**:
  - Категория (музей, замок, природа).
  - Теги (семейный, бесплатный, исторический).
  - Расстояние (например, "в радиусе 10 км").
- **Список достопримечательностей**:
  - Название (например, "Мирский замок").
  - Краткое описание.
  - Средний рейтинг (звёзды, из `Attraction.averageRating`).
  - Кнопка "Посмотреть на карте".
- **Сохранённые маршруты** (для авторизованных пользователей):
  - Список маршрутов из таблицы `Route` (WHERE `userId = currentUser.id`).
  - Показывает название маршрута, длительность и среднюю оценку (из `RouteRating`).
- **Кнопки**:
  - "Создать маршрут" (переход к экрану создания маршрута).
  - "Открыть карту" (переход к экрану карты).
  - "Войти/Профиль" (переход к экрану авторизации или профиля).

**Навигация**:
- Клик по достопримечательности → Экран деталей достопримечательности.
- Клик по сохранённому маршруту → Экран маршрута.
- "Открыть карту" → Экран карты.
- "Создать маршрут" → Экран создания маршрута.
- "Войти/Профиль" → Экран авторизации/профиля.

### 1.2. Экран 2: Карта (Map Screen)
**Описание**: Отображает карту с метками достопримечательностей и маршрутами.
**Элементы**:
- **Карта (Яндекс.Карты/Google Maps)**:
  - Метки для каждой достопримечательности (координаты из `Location.latitude`, `Location.longitude`).
  - Отображение маршрута, если он выбран (из `Route`).
- **Кнопки**:
  - "Начать навигацию" (запускает маршрут в навигаторе).
  - "Вернуться" (на главный экран или экран маршрута).

**Навигация**:
- Клик по метке → Экран деталей достопримечательности.
- "Вернуться" → Главный экран или экран маршрута.

### 1.3. Экран 3: Детали достопримечательности (Attraction Details)
**Описание**: Подробная информация о выбранной достопримечательности.
**Элементы**:
- Название (из `Attraction.name`).
- Галерея фотографий (из `Media.url`).
- Описание (из `Attraction.description`).
- Часы работы (из `OperatingHours`).
- Стоимость входа (из `Attraction.entryFee`).
- Средний рейтинг и отзывы (из `Review`, с привязкой к `User`).
- Теги (из `Tag`).
- **Кнопки**:
  - "Добавить в маршрут" (добавляет в новый или существующий маршрут).
  - "Посмотреть на карте" (переход к экрану карты).
  - "Оставить отзыв" (для авторизованных пользователей, создаёт запись в `Review`).
  - "Вернуться" (на главный экран).

**Навигация**:
- "Добавить в маршрут" → Экран создания маршрута.
- "Посмотреть на карте" → Экран карты.
- "Оставить отзыв" → Форма отзыва (сохраняет в `Review`).
- "Вернуться" → Главный экран.

### 1.4. Экран 4: Создание маршрута (Route Creation)
**Описание**: Экран для составления маршрута из выбранных достопримечательностей.
**Элементы**:
- Поле для ввода названия маршрута (`Route.name`).
- Список выбранных достопримечательностей (из связи `RouteToAttraction`).
- Общая длительность (сумма `Attraction.visitDuration`).
- Общее расстояние (рассчитывается через API навигатора, сохраняется в `Route.distance`).
- Флаг "Сгенерированный маршрут" (`Route.isGenerated`).
- **Кнопки**:
  - "Сохранить маршрут" (сохраняет в `Route`, связывает с `userId`).
  - "Оценить маршрут" (для авторизованных пользователей, создаёт запись в `RouteRating`).
  - "Посмотреть на карте" (переход к экрану карты с маршрутом).
  - "Вернуться" (на главный экран).

**Навигация**:
- "Посмотреть на карте" → Экран карты.
- "Вернуться" → Главный экран.

### 1.5. Экран 5: Профиль пользователя (User Profile)
**Описание**: Экран для авторизованных пользователей, отображающий их данные и маршруты.
**Элементы**:
- Информация о пользователе (`User.name`, `User.email`).
- Список сохранённых маршрутов (`Route` WHERE `userId = currentUser.id`).
- Список сгенерированных маршрутов (`Route` WHERE `isGenerated = true`).
- Средние оценки маршрутов (из `RouteRating`).
- **Кнопки**:
  - "Редактировать профиль" (обновляет `User`).
  - "Выйти" (завершает сессию).
  - "Просмотреть маршрут" (переход к экрану маршрута).
  - "Вернуться" (на главный экран).

**Навигация**:
- "Просмотреть маршрут" → Экран маршрута.
- "Вернуться" → Главный экран.

## 2. Схема базы данных

### 2.1. Таблицы и поля
**Таблица `User`**:
- `id: Int` (PK, автоинкремент)
- `name: String` (имя пользователя)
- `email: String` (уникальный, для авторизации)
- `password: String` (хэшированный пароль)
- `createdAt: DateTime`
- `updatedAt: DateTime`

**Таблица `Attraction`**:
- `id: Int` (PK, автоинкремент)
- `name: String` (название, например, "Мирский замок")
- `description: String?` (описание)
- `categoryId: Int` (FK, ссылка на `Category`)
- `locationId: Int` (FK, ссылка на `Location`, уникальный)
- `averageRating: Float?` (средний рейтинг)
- `visitDuration: Float?` (длительность посещения, в часах)
- `entryFee: Float?` (стоимость входа)
- `website: String?` (сайт)
- `phone: String?` (телефон)
- `createdAt: DateTime`
- `updatedAt: DateTime`

**Таблица `Location`**:
- `id: Int` (PK, автоинкремент)
- `latitude: Float` (широта, для навигатора)
- `longitude: Float` (долгота, для навигатора)
- `address: String?` (адрес)
- `city: String?` (город)
- `country: String` (по умолчанию "Belarus")
- `createdAt: DateTime`
- `updatedAt: DateTime`

**Таблица `Category`**:
- `id: Int` (PK, автоинкремент)
- `name: String` (название категории, например, "Музей")
- `createdAt: DateTime`
- `updatedAt: DateTime`

**Таблица `Media`**:
- `id: Int` (PK, автоинкремент)
- `attractionId: Int` (FK, ссылка на `Attraction`)
- `url: String` (URL фото/видео)
- `type: String` (тип: "image", "video")
- `caption: String?` (подпись)
- `createdAt: DateTime`
- `updatedAt: DateTime`

**Таблица `Review`**:
- `id: Int` (PK, автоинкремент)
- `attractionId: Int` (FK, ссылка на `Attraction`)
- `userId: Int` (FK, ссылка на `User`, обязательное)
- `rating: Int` (оценка, 1-5)
- `comment: String?` (текст отзыва)
- `createdAt: DateTime`
- `updatedAt: DateTime`

**Таблица `Tag`**:
- `id: Int` (PK, автоинкремент)
- `name: String` (название тега, например, "исторический")
- `createdAt: DateTime`
- `updatedAt: DateTime`

**Таблица `OperatingHours`**:
- `id: Int` (PK, автоинкремент)
- `attractionId: Int` (FK, ссылка на `Attraction`)
- `dayOfWeek: String` (день недели)
- `openTime: String?` (время открытия)
- `closeTime: String?` (время закрытия)
- `isClosed: Boolean` (закрыто ли)
- `createdAt: DateTime`
- `updatedAt: DateTime`

**Таблица `Route`**:
- `id: Int` (PK, автоинкремент)
- `name: String` (название маршрута)
- `description: String?` (описание)
- `userId: Int` (FK, ссылка на `User`, обязательное)
- `isGenerated: Boolean` (флаг, сгенерирован ли маршрут системой)
- `duration: Float?` (длительность, часы)
- `distance: Float?` (расстояние, км)
- `createdAt: DateTime`
- `updatedAt: DateTime`

**Таблица `RouteRating`**:
- `id: Int` (PK, автоинкремент)
- `routeId: Int` (FK, ссылка на `Route`)
- `userId: Int` (FK, ссылка на `User`)
- `rating: Int` (оценка, 1-5)
- `comment: String?` (комментарий к оценке)
- `createdAt: DateTime`
- `updatedAt: DateTime`

### 2.2. Связи между таблицами
- **User ↔ Route**: 1:N (`userId` в `Route` ссылается на `id` в `User`).
- **User ↔ Review**: 1:N (`userId` в `Review` ссылается на `id` в `User`).
- **User ↔ RouteRating**: 1:N (`userId` в `RouteRating` ссылается на `id` в `User`).
- **Attraction ↔ Location**: 1:1 (`locationId` в `Attraction` ссылается на `id` в `Location`).
- **Attraction ↔ Category**: N:1 (`categoryId` в `Attraction` ссылается на `id` в `Category`).
- **Attraction ↔ Media**: 1:N (`attractionId` в `Media` ссылается на `id` в `Attraction`).
- **Attraction ↔ Review**: 1:N (`attractionId` в `Review` ссылается на `id` в `Attraction`).
- **Attraction ↔ OperatingHours**: 1:N (`attractionId` в `OperatingHours` ссылается на `id` в `Attraction`).
- **Attraction ↔ Tag**: N:N (через промежуточную таблицу `AttractionToTag`).
- **Attraction ↔ Route**: N:N (через промежуточную таблицу `RouteToAttraction`).
- **Route ↔ RouteRating**: 1:N (`routeId` в `RouteRating` ссылается на `id` в `Route`).

## 3. Взаимодействие UI и базы данных
- **Главный экран**:
  - Список достопримечательностей: Запрос к `Attraction` (поля: `name`, `description`, `averageRating`) с JOIN на `Category` и `Tag` для фильтров.
  - Сохранённые маршруты: Запрос к `Route` (WHERE `userId = currentUser.id`) с JOIN на `RouteRating` для средней оценки.
  - Фильтры: Используют `Category.name`, `Tag.name`, и `Location.latitude`, `Location.longitude` для расстояния.
- **Экран карты**:
  - Метки: Координаты из `Location.latitude`, `Location.longitude`.
  - Маршрут: Координаты из `Location` для достопримечательностей, связанных с `Route` через `RouteToAttraction`.
- **Детали достопримечательности**:
  - Информация: `Attraction.name`, `description`, `entryFee`, `averageRating`.
  - Фото: `Media.url` (WHERE `type = 'image'`).
  - Часы работы: `OperatingHours.dayOfWeek`, `openTime`, `closeTime`, `isClosed`.
  - Отзывы: `Review.rating`, `Review.comment`, JOIN с `User.name` для отображения имени автора.
  - Теги: `Tag.name` (через связь N:N).
- **Создание маршрута**:
  - Список достопримечательностей: `Attraction.name` из связи `RouteToAttraction`.
  - Длительность: Сумма `Attraction.visitDuration`.
  - Расстояние: Рассчитывается через API навигатора, сохраняется в `Route.distance`.
  - Сохранение: Создаёт запись в `Route` (с `userId` и `isGenerated`), связи в `RouteToAttraction`.
  - Оценка: Создаёт запись в `RouteRating` (с `userId`, `routeId`, `rating`).
- **Профиль пользователя**:
  - Информация: `User.name`, `User.email`.
  - Маршруты: Запрос к `Route` (WHERE `userId = currentUser.id`, с фильтром `isGenerated` для разделения).
  - Оценки: Средняя оценка из `RouteRating` для каждого маршрута.

## 4. Примечания
- **Авторизация**:
  - Используйте `User.email` и `User.password` для входа.
  - Храните сессии (например, JWT) для проверки `currentUser.id`.
- **Интеграция с навигатором**:
  - Передавайте `Location.latitude` и `Location.longitude` в API Яндекс.Карт (https://yandex.ru/dev/maps/) или Google Maps (https://developers.google.com/maps/documentation/directions).
  - Маршруты строятся через API маршрутизации с координатами из `Location` для достопримечательностей в `RouteToAttraction`.
- **Сгенерированные маршруты**:
  - Поле `Route.isGenerated = true` для маршрутов, созданных системой (например, по алгоритму на основе `Category`, `Tag`, или `visitDuration`).
  - Пользователь может оценить сгенерированный маршрут в `RouteRating`.
- **Оптимизация**:
  - Кэшируйте данные `Attraction`, `Location`, и популярные маршруты (`Route`) в Redis.
  - Используйте индексы на `User.email`, `Route.userId`, и `Location.latitude`, `Location.longitude` для быстрого поиска.
- **Расширяемость**:
  - Добавьте таблицу `Translation` для локализации (`name`, `description` на разных языках).
  - Для рекомендаций маршрутов используйте алгоритмы на основе `Tag`, `Review.rating`, и `RouteRating`.