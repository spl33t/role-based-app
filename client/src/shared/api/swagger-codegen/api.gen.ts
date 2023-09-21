/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface LoginDto {
  login: string;
  password: string;
}

export enum UserRoleEnum {
  ROOT = "ROOT",
  ADMIN = "ADMIN",
  DISPATCHER = "DISPATCHER",
  DISPATCHER_SENIOR = "DISPATCHER_SENIOR",
  MANAGER_OF_PROVIDER_CARDS = "MANAGER_OF_PROVIDER_CARDS",
  MANAGER_OF_PROVIDER_ORDERS = "MANAGER_OF_PROVIDER_ORDERS",
  PERFORMING_COMPANY_ADMIN = "PERFORMING_COMPANY_ADMIN",
  PROVIDER_COMPANY_ADMIN = "PROVIDER_COMPANY_ADMIN",
  CLIENT = "CLIENT",
}

export interface AcceptanceCertificate {
  isClean: boolean;
  frontGlass: boolean;
  hood: boolean;
  frontLightRight: boolean;
  frontLightLeft: boolean;
  antiFogLightRight: boolean;
  antiFogLightLeft: boolean;
  frontBumper: boolean;
  frontBumperSkirt: boolean;
  radiatorGrille: boolean;
  rightMirrorBackView: boolean;
  rightFrontFender: boolean;
  rightBackFender: boolean;
  rightFrontDoor: boolean;
  rightBackDoor: boolean;
  rightThreshold: boolean;
  rightFrontGlass: boolean;
  rightBackGlass: boolean;
  rightBackWindowLeaf: boolean;
  leftMirrorBackView: boolean;
  leftFrontFender: boolean;
  leftBackFender: boolean;
  leftFrontDoor: boolean;
  leftBackDoor: boolean;
  leftThreshold: boolean;
  leftFrontGlass: boolean;
  leftBackGlass: boolean;
  leftBackWindowLeaf: boolean;
  backGlass: boolean;
  trunkLid: boolean;
  backLightRight: boolean;
  backLightLeft: boolean;
  backBumper: boolean;
  backBumperSkirt: boolean;
  backBumperReflectorRight: boolean;
  backBumperReflectorLeft: boolean;
  backSpoiler: boolean;
  mufflerCapRight: boolean;
  mufflerCapLeft: boolean;
  roofFrontPart: boolean;
  roofBackPart: boolean;
  roofHatch: boolean;
  roofPanoramicView: boolean;
  isAgreeThisInspection: boolean;
}

export enum OrderTypeEnum {
  ValueТрезвыйВодитель = "Трезвый водитель",
  ValueНеВыбран = "Не выбран",
  ValueЭвакуаторЛегковой = "Эвакуатор легковой",
  ValueЭвакуацияАвтомобиляКроссовер = "Эвакуация автомобиля (кроссовер)",
  ValueЭвакуацияАвтомобиляСедан = "Эвакуация автомобиля (седан)",
  ValueЭвакуацияАвтомобиляХетчбек = "Эвакуация автомобиля (хетчбек)",
  ValueЭвакуацияАвтомобиляМинивэн = "Эвакуация автомобиля (минивэн)",
  ValueЭвакуаторГрузовой = "Эвакуатор грузовой",
  ValueЭвакуаторСедан = "Эвакуатор (седан)",
  ValueЭвакуаторКроссовер = "Эвакуатор (кроссовер)",
  ValueЭвакуаторХетчбек = "Эвакуатор (хетчбек)",
  ValueАварийныйКомиссарСоСправками = "Аварийный комиссар со справками",
  ValueПодкачкаКолесаЗаменаКолесаНаЗапасное = "Подкачка колеса, замена колеса на запасное",
  ValueВыезднойШиномонтаж = "Выездной шиномонтаж",
  ValueПодвозТоплива = "Подвоз топлива",
  ValueЗапускДвигателя = "Запуск двигателя",
  ValueЗапускДвигателяОтДополнительнойАккумуляторнойБатареиАКБ = "Запуск двигателя от дополнительной аккумуляторной батареи (АКБ)",
  ValueНезависимаяЭкспертиза = "Независимая экспертиза",
  ValueПодменныйАвтомобиль = "Подменный автомобиль",
  ValueТакси = "Такси",
  ValueТранспортныйКомиссар = "Транспортный комиссар",
  ValueГрузоваяТехпомощь = "Грузовая техпомощь",
  ValueПостановкаНаУчетВГИБДД = "Постановка на учет в ГИБДД",
  ValueСборСправокПриДТП = "Сбор справок при ДТП",
  ValueАвтовоз = "Автовоз",
  ValueМанипуляторЛегковой = "Манипулятор легковой",
  ValueМанипуляторКроссовер = "Манипулятор (кроссовер)",
  ValueМанипуляторСедан = "Манипулятор (седан)",
  ValueМанипуляторХетчбек = "Манипулятор (хетчбек)",
  ValueМанипуляторМинивэн = "Манипулятор (минивэн)",
  ValueМанипуляторГрузовой = "Манипулятор грузовой",
  ValueПоискЭвакуированногоАМ = "Поиск эвакуированного а/м",
  ValueКонсультации247ДежурногоТерапевта = "Консультации 24/7 дежурного терапевта",
  ValueКонсультации247ДежурногоПедиатра = "Консультации 24/7 дежурного педиатра",
  ValueКонсультацииПоЗаписиУПрофильныхСпециалистовВУдобноеМедицинскоеУчреждение = "Консультации по записи у профильных специалистов в удобное медицинское учреждение",
  ValueКонсультацияПоПравамКлиентаВРамкахМедицинскогоОбслуживания = "Консультация по правам клиента в рамках медицинского обслуживания",
  ValueКонсультацияИИнформированиеОБлижайшихГосударственныхИКоммерческихКлиниках = "Консультация и информирование о ближайших государственных и коммерческих клиниках",
  ValueКонсультацииПоОписаниюМедицинскихПрепаратов = "Консультации по описанию медицинских препаратов",
  ValueКонсультацииПоПодборуМедикаментовИИхАналогов = "Консультации по подбору медикаментов и их аналогов",
  ValueКонсультацияОПолученномПисьменномАльтернативномЗаключение = "Консультация о полученном письменном альтернативном заключение",
  ValueВызовСкоройПомощиДляПострадавшего = "Вызов скорой помощи для пострадавшего",
  ValueУстноеСопровождениеГражданПоОтстаиваниюИнтересовПоПолучениюПричитающегоМед = "Устное сопровождение граждан по отстаиванию интересов по получению причитающего мед",
  ValueОнлайнКонсультацииУПсихологовВысшейКатегории = "Онлайн консультации у психологов высшей категории",
  ValueОнлайнКонсультацииУХирурга = "Онлайн консультации у хирурга",
  ValueОтправленНаДиагностику = "Отправлен на диагностику",
  ValueРемонтСогласован = "Ремонт согласован",
  ValueВскрытиеАвтомобиля = "Вскрытие автомобиля",
  ValueРемонтНеСогласован = "Ремонт не согласован",
  ValueАварийныйКомиссарОформлениеЕвропротакола = "Аварийный комиссар оформление европротакола",
  ValueКруглосуточнаяПоддержка800ДляКлиентов247365 = "Круглосуточная поддержка 8-00 для клиентов 24/7/365",
  ValueКруглосуточнаяЮридическаяКонсультация247365 = "Круглосуточная  юридическая консультация 24/7/365",
  ValueКруглосуточнаяТехническаяКонсультацияПоТелефону247365 = "Круглосуточная техническая консультация по телефону 24/7/365",
  ValueОрганизацияТрансфераИПроживанияВОтелеПриПоломкеДТП = "Организация трансфера и проживания в отеле при поломке/ДТП",
  ValueКруглосуточныйАвтоконсьержУслугВДругомГороде247365 = "Круглосуточный автоконсьерж услуг в другом городе 24/7/365",
  ValueПоискЭвакуированногоАвтоНаШтрафСтоянку = "Поиск эвакуированного авто на штраф стоянку",
  ValueОткапываниеМашиныИзСнегаПомощьВВыезде = "Откапывание машины из снега ( помощь в выезде)",
}

export enum OrderPaymentTypeEnum {
  ValueНеВыбран = "Не выбран",
  ValueБезналичныйРасчет = "Безналичный расчет",
  ValueНаличныйРасчет = "Наличный расчет",
}

export enum OrderStatusEnum {
  ValueНовоеОбращение = "Новое обращение",
  ValueНовыйЗаказ = "Новый заказ",
  ValueПоискИсполнителя = "Поиск исполнителя",
  ValueВозвещение = "Возвещение",
  ValueЗапросЦены = "Запрос цены",
  ValueИсполнительНазначенНаЗаказ = "Исполнитель назначен на заказ",
  ValueОтменаЗаказа = "Отмена заказа",
  ValueЗаказВыполнен = "Заказ выполнен",
  ValueЛожныйВызов = "Ложный вызов",
}

export interface OrderRateByPerformer {
  cost: number;
  performingCompanyId: number;
}

export enum CardStatusEnum {
  ValueНеАктивированная = "Не активированная",
  ValueАктивированная = "Активированная",
  ValueСвободная = "Свободная",
  ValueВозвратКарты = "Возврат карты",
  ValueПросроченная = "Просроченная",
  ValueУдалена = "Удалена",
  ValueАннулирована = "Аннулирована",
}

export enum CardTariffPaymentMethodEnum {
  ValueНеВыбран = "Не выбран",
  ValueБезналичный = "Безналичный",
  ValueНаличный = "Наличный",
}

export interface ServiceForTariffObject {
  name: string;
  useCount: string;
}

export enum ProviderCompanyTypeEnum {
  ValueНеВыбран = "Не выбран",
  ValueБанк = "Банк",
  ValueСтраховаяКомпания = "Страховая компания",
  ValueЛизинговаяКомпания = "Лизинговая компания",
  ValueДилерскийЦентр = "Дилерский центр",
  ValueАвтосалон = "Автосалон",
  ValueАвтоПроизводитель = "Авто производитель",
}

export enum ProviderCompanyInteractionTypeEnum {
  ValueНеВыбран = "Не выбран",
  ValueРазовыеУслуги = "Разовые услуги",
  ValueПродажаКарт = "Продажа карт",
}

export enum ProviderCompanyPaymentTypeEnum {
  ValueНеВыбран = "Не выбран",
  ValueРазовыеУслуги = "Разовые услуги",
  ValueБезУдержания = "Без удержания",
  ValueСУдержанием = "С  удержанием",
}

export enum CardRangeTypeEnum {
  ValueНеВыбран = "Не выбран",
  ValueТехническаяКарта = "Техническая карта",
  ValueПродленнаяГарантияНаНовыйАМ = "Продленная гарантия на новый  а/м",
  ValueПродленнаяГарантия = "Продленная гарантия",
  ValueНезависимаяГарантия = "Независимая гарантия",
  ValueТелемедецина = "Телемедецина",
  ValueАвтоЮрист = "Авто юрист",
  ValueПакетСервисныхУслуг = "Пакет сервисных услуг",
}

export interface CardRangeModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * Серийный код диапазона
   * @example 1
   */
  rangeCode: number;
  /**
   * Диапазон от
   * @example 1
   */
  rangeStart: number;
  /**
   * Диапазон до
   * @example 1
   */
  rangeEnd: number;
  /**
   * Следущая карта которая будет сгенерирована в этом диапазоне
   * @example 1
   */
  currentRange: number;
  /**
   * Стоимость карт????
   * @example 1337
   */
  cost: number;
  /**
   * Тип карт в этом диапозоне
   * @example "Не выбран"
   */
  rangeType: CardRangeTypeEnum;
  /**
   * Контракт????
   * @example "00000"
   */
  contract: string;
  /**
   * Исчерпан ли диапазон?
   * @example false
   */
  rangeIsExhausted: boolean;
  /**
   * Диапазон до
   * @example false
   */
  availableCardsCountInRange: number;
  /** Карты принадлежащие даипазону */
  cards: CardModel[];
  /**
   * Уникальный индитефикатор провайдерской компании
   * @example 1
   */
  providerCompanyId: number;
  /** Провайдерская компания */
  providerCompany: ProviderCompanyModel;
}

export interface PerformingCompanyMemberModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * Уникальный индитефикатор юзера
   * @example 5
   */
  userId: number;
  /** Юзер */
  user: UserModel;
  /**
   * Уникальный индитефикатор исполнительной компании
   * @example 5
   */
  performingCompanyId: number;
  /** Исполнительская компания */
  performingCompany: PerformingCompanyModel;
}

export interface PerformingCompanyModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * Название компании
   * @example "OOO ТИПОЧКИ"
   */
  name: string;
  /**
   * Телефон
   * @example "9772708478"
   */
  phone: string;
  /**
   * Электроная почта
   * @example "mail@ya.ru"
   */
  email: string;
  /**
   * Адрес
   * @example "ул. Пушкина д. Колотушкина"
   */
  cities: string;
  /**
   * Машины
   * @example "эвакуатор (лебедка до 3 тонн)"
   */
  cars: string;
  /**
   * Кол во машин
   * @example 5
   */
  carsCount: number;
  /**
   * Баланс
   * @example "1337"
   */
  balance: number;
  /**
   * Коментарий
   * @example "Топовый перец"
   */
  note: string;
  /** Участники исполнительной компании */
  members: PerformingCompanyMemberModel[];
  /** Заказы в которыз участвовала исполнительньная компания */
  orders: any[][];
  /** Юр.лица исполнительной компании */
  legalFace: LegalFaceModel[];
}

export interface LegalFaceModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * ФИО
   * @example "Анна Макаровна"
   */
  name: string;
  /**
   * Телефон
   * @example "+79992778765"
   */
  phone: string;
  /**
   * Почта
   * @example "alenkapiskun@ya.ru"
   */
  email: string;
  /**
   * ИНН организации
   * @example "8881723123"
   */
  inn: string;
  /**
   * КПП организации
   * @example "8881723123"
   */
  kpp: string;
  /**
   * ОГРН организации
   * @example "8881723123"
   */
  ogrn: string;
  /**
   * ОГРНИП организации
   * @example "8881723123"
   */
  ogrnip: string;
  /**
   * Юр. адрес
   * @example "ул. Пушкина"
   */
  legalAddress: string;
  /**
   * Фактический адрес
   * @example "ул. Пушкина"
   */
  actualAddress: string;
  /**
   * Почтовый адрес
   * @example "ул. Пушкина"
   */
  mailAddress: string;
  /**
   * Генеральный директор ФИО
   * @example "ул. Пушкина"
   */
  generalDirectorName: string;
  /**
   * Генеральный директор телефон
   * @example "ул. Пушкина"
   */
  generalDirectorPhone: string;
  /**
   * Генеральный директор Email
   * @example "example@mail.com"
   */
  generalDirectorEmail: string;
  /**
   * Банк назване
   * @example "ул. Пушкина"
   */
  bankName: string;
  /**
   * Банк БИК
   * @example "ул. Пушкина"
   */
  bankBik: string;
  /**
   * Расчетный счет
   * @example "1234567890"
   */
  checkingAccount: string;
  /**
   * Кореспонденский счет
   * @example "1234567890"
   */
  correspondentAccount: string;
  /**
   * Главный бухгалтер ФИО
   * @example "Жмышенко Валерий Альбертович"
   */
  mainAccountantName: string;
  /**
   * Главный бухгалтер телефон
   * @example "+72283221488"
   */
  mainAccountantPhone: string;
  /**
   * Главный бухгалтер email
   * @example "example@mail.com"
   */
  mainAccountantEmail: string;
  /**
   * Контактное лицо ФИО
   * @example "Шелдон Купер"
   */
  contactFaceName: string;
  /**
   * Контактное лицо телефон
   * @example "+73226661337"
   */
  contactFacePhone: string;
  /**
   * Контактное лицо email
   * @example "example@mail.com"
   */
  contactFaceEmail: string;
  /**
   * Коментарий
   * @example "Топовый перец"
   */
  note: string;
  /**
   * Extra Phones
   * @example "+73221337228"
   */
  extraPhones: string;
  /**
   * Уникальный индитефикатор провайдерской компании
   * @example 1
   */
  providerCompanyId: number | null;
  /** Провайдерская компания */
  providerCompany: ProviderCompanyModel | null;
  /**
   * Уникальный индитефикатор исполнительной компании
   * @example 1
   */
  performingCompanyId: number | null;
  /** Исполнительная компания */
  performingCompany: PerformingCompanyModel | null;
}

export interface ProviderCompanyModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * Название компании
   * @example "OOO ТИПОЧКИ"
   */
  name: string;
  /**
   * Телефон
   * @example "9772708478"
   */
  phone: string;
  /**
   * Электроная почта
   * @example "mail@ya.ru"
   */
  email: string;
  /**
   * Адрес
   * @example "ул. Пушкина д. Колотушкина"
   */
  address: string;
  /**
   * Тип провайдера
   * @example "Не выбран"
   */
  providerCompanyType: ProviderCompanyTypeEnum;
  /**
   * Тип взаимодействия
   * @example "Не выбран"
   */
  interactionType: ProviderCompanyInteractionTypeEnum;
  /**
   * Тип оплаты
   * @example "Не выбран"
   */
  paymentType: ProviderCompanyPaymentTypeEnum;
  /**
   * Процент скидки
   * @example "50"
   */
  discount: number;
  /**
   * Процент возрврата (кэшбэк)
   * @example "30"
   */
  returnPercentage: number;
  /**
   * Вознаграждение
   * @example "???"
   */
  providerRemuneration: number;
  /**
   * Агентское вознграждение
   * @example "???"
   */
  agentFee: number;
  /**
   * Баланс
   * @example "1337"
   */
  balance: number;
  /**
   * Коментарий
   * @example "Топовый перец"
   */
  note: string;
  /** Участники провайдерской компании */
  users: UserModel[];
  /** Диапазоны карт провайдерской компании */
  cardRanges: CardRangeModel[];
  /** Карты провайдерской компании */
  cards: CardModel[];
  /** Тарифы принадлежащие провайдеру */
  cardTariffs: CardTariffModel[];
  /** Заказы в которых участвовала провайдерская компании */
  orders: OrderModel[];
  /** Юр. лица  провайдерской компании */
  legalFace: LegalFaceModel[];
}

export interface CardTariffModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * Название тарифа
   * @example 1
   */
  name: string;
  /**
   * Тип оплаты
   * @example "Не выбран"
   */
  paymentMethod: CardTariffPaymentMethodEnum;
  /** Услуги */
  services: ServiceForTariffObject[];
  /**
   * Стоимость
   * @example 1337
   */
  cost: number;
  /**
   * Уникальный индитефикатор провайдерской компании
   * @example 1
   */
  providerCompanyId: number;
  /**
   * Провайдерская компания
   * @example 1
   */
  providerCompany: ProviderCompanyModel;
  /** Карты которым принадлежит тариф */
  cards: any[][];
}

export interface AutomobileModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /** Модель */
  name: string;
  /** Год выпуска */
  releaseYear: number;
  /** Пробег авто */
  mileage: string;
  /**
   * Дата завершения гарантии
   * @format date-time
   */
  warrantyEndDate: Date;
  /** Оценка стоимости автомобиля */
  costValuation: string;
  /**
   * Государтсвенный номер машины
   * @example "99999"
   */
  gosNumber: string;
  /**
   * ВИН номер машины
   * @example "99999"
   */
  vinNumber: string;
  /**
   * Страхование автомобиля
   * @example "Страховка????"
   */
  insurance: string;
  /**
   * Комментарий
   * @example "AZAZA"
   */
  note: string;
  /** Карты к которым привязан авто */
  cards: any[][];
}

export interface FileModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /** Имя файла */
  fileName: string;
  /** Путь к файлу */
  path: string;
}

export interface CardModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * Код карты
   * @example "123999777666"
   */
  code: number;
  /**
   * Начало работы карты
   * @format date-time
   * @example "2023-09-15T22:42:28.159Z"
   */
  validFrom: Date | null;
  /**
   * Конец работы карты
   * @format date-time
   * @example "2023-09-15T22:42:28.159Z"
   */
  validTo: Date | null;
  /**
   * Статус карты
   * @example "Активированная"
   */
  status: CardStatusEnum;
  /**
   * Стоимость для клиента
   * @example 1337
   */
  clientPrice: number;
  /** Комментарий к карте */
  note: string;
  /**
   * Уникальный индитефикатор тарифа
   * @example 3
   */
  cardTariffId: number | null;
  /** Тариф карты */
  cardTariff: CardTariffModel | null;
  /**
   * Уникальный индитефикатор авто
   * @example 1
   */
  automobileId: number;
  /** Автомобиль */
  automobile: AutomobileModel | null;
  /**
   * Уникальный индитефикатор диапазона
   * @example 3
   */
  cardRangeId: number | null;
  /** Диапазон карты */
  cardRange: CardRangeModel;
  /**
   * Уникальный индитефикатор юр.лица
   * @example 1
   */
  legalFaceId: number | null;
  /** Юр. лицо */
  legalFace: LegalFaceModel | null;
  /** Все доступные юр.лица для карты */
  legalFaces: LegalFaceModel[];
  /**
   * Уникальный индитефикатор клиента
   * @example 1
   */
  clientId: number;
  /** Клиент */
  client: ClientModel | null;
  /**
   * Уникальный индитефикатор провайдерской компании
   * @example 1
   */
  providerCompanyId: number;
  /** Провайдерская компания */
  providerCompany: ProviderCompanyModel;
  /** Заказы в которых участвовала карта */
  orders: OrderModel[];
  /** Все доступные тарифы для карты */
  cardTariffs: CardTariffModel[];
  /** Все доступные файлы для карты */
  files: FileModel[];
}

export interface OrderModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * Дата когда исполнитель исполнил свои обязанности
   * @format date-time
   * @example "2023-09-15T22:42:28.147Z"
   */
  completeDate: Date | null;
  /**
   * Заказ закрыт
   * @format date-time
   * @example "2023-09-15T22:42:28.147Z"
   */
  closeDate: Date | null;
  /**
   * Акт приема сдачи
   * @example 1
   */
  acceptanceCertificate: AcceptanceCertificate;
  /**
   * Адрес  откдуа взять заказ
   * @example 1
   */
  addressGet: string;
  /**
   * Адрес куда везти заказ
   * @example 1
   */
  addressIn: string;
  /**
   * Тип заказа
   * @example "Не выбран"
   */
  orderType: OrderTypeEnum;
  /**
   * Тип оплаты
   * @example "Наличный расчет"
   */
  paymentType: OrderPaymentTypeEnum;
  /**
   * Статус заказа
   * @example "Новый заказ"
   */
  status: OrderStatusEnum;
  /**
   * Км пробег груженного транспорта
   * @example 1337
   */
  kmLoadedTransport: string;
  /**
   * Стоимость заказа
   * @example 1337
   */
  cost: number;
  /** Ставки от исполнителей */
  ratesFromPerformers: OrderRateByPerformer[];
  /**
   * Комментарий к заказу
   * @example "Выполнить в преоритете"
   */
  note: string;
  /**
   * полиция?
   * @example 1337
   */
  police: string;
  /**
   * Потеря
   * @example 1337
   */
  loss: string;
  /**
   * Ответсвенное лицо
   * @example "Daria"
   */
  responsibleFace: string;
  /** Если к заказу не привязана карта данные о машине заполняются на уровне заказа */
  carName: string;
  /** Если к заказу не привязана карта данные о машине заполняются на уровне заказа */
  gosNumber: string;
  /** Если к заказу не привязана карта данные о машине заполняются на уровне заказа */
  vinNumber: string;
  /**
   * В рублях
   * @example 1337
   */
  paymentToTheDriver: number;
  /**
   * Уникальный индитефикатор клиента
   * @example 69
   */
  clientId: number;
  /** Клиент */
  client: ClientModel;
  /**
   * Уникальный индитефикатор карты
   * @example 1
   */
  cardId: number | null;
  /** Карта */
  card: CardModel | null;
  /**
   * Уникальный индитефикатор провайдерской компании
   * @example 1
   */
  providerCompanyId: number | null;
  /** Провайдерская компания */
  providerCompany: ProviderCompanyModel | null;
  /** Кол-во забронированных колёс */
  blockedWheels: number;
  /**
   * Уникальный индитефикатор исполнительной компании
   * @example 1
   */
  performingCompanyId: number | null;
  /** Исполнительная компания */
  performingCompany: PerformingCompanyModel | null;
  /** Все доступные файлы для заказа */
  files: FileModel[];
}

export interface ClientModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * Имя
   * @example "Maxim"
   */
  name: string;
  /**
   * Телефон
   * @example "99999999"
   */
  phone: string;
  /**
   * Почта
   * @example "spl33t@ya.ru"
   */
  email: string;
  /**
   * Город
   * @example "Мосвква"
   */
  city: string;
  /**
   * Серийный номер паспорта
   * @example "4617968378"
   */
  passportSerial: string;
  /**
   * Кем выдан паспорт
   * @example "МВД Городского округа Мосвква г. Реутов"
   */
  passportIssuedFrom: string;
  /**
   * Дата выдачи паспорта
   * @format date-time
   * @example "2023-09-15T22:42:28.148Z"
   */
  passportIssueDate: Date | null;
  /**
   * Адрес проживания по паспорту
   * @example "Мосвква"
   */
  passportResidenceAddress: string;
  /**
   * Комментарий
   * @example "AZAZA"
   */
  note: string;
  /** Карты клиента */
  cards: any[][];
  /** Заказы клиенты */
  orders: OrderModel[];
  /**
   * Уникальный индитефикатор юзера
   * @example 1
   */
  userId: number;
  /** Юзер */
  user: UserModel;
}

export interface TokenModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * JWT TOKEN
   * @example "refreshToken"
   */
  refreshToken: string;
  /**
   * Уникальный индитефикатор юзера
   * @example 1
   */
  userId: number;
  /** Юзер */
  user: UserModel;
}

export enum ActionEnum {
  Create = "create",
  Update = "update",
  Destroy = "destroy",
}

export interface AuditLogModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  tableName: string;
  tableRowId: string;
  action: ActionEnum;
  previousValues: object;
  changedKeys: string[];
  /**
   * Уникальный индитефикатор юзера
   * @example 1
   */
  userId: number;
  /**
   * Юзер
   * @example 1
   */
  user: UserModel;
}

export interface UserModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * Логин
   * @example "spl33t"
   */
  login: string;
  /**
   * Телефон
   * @example "+7 (977) 270 84-78"
   */
  phone: string;
  /**
   * Почта
   * @example "spl33t@ya.ru"
   */
  email: string;
  /**
   * Красивое имя
   * @example "Юрий Клюжев"
   */
  name: string;
  /**
   * Если заморожен вход запрещен
   * @example "Заморожен"
   */
  freeze: boolean;
  /**
   * Пароль
   * @example "ds76_)pPi-"
   */
  password: string;
  /**
   * Роль
   * @example "ADMIN"
   */
  role: UserRoleEnum;
  /** Клиент */
  client: ClientModel;
  /** Провайдерской компании */
  providerCompanies: ProviderCompanyModel[] | null;
  /** Участник исполнительной компании */
  performingCompanyMember: PerformingCompanyMemberModel;
  /** Рефреш токены */
  tokens: TokenModel[];
  /** Логи действий пользователя */
  auditLogs: AuditLogModel[];
}

export interface JwtTokensDto {
  accessToken: string;
  refreshToken: string;
}

export interface UserWithTokensDto {
  user: UserModel;
  tokens: JwtTokensDto;
}

export interface RegisterDto {
  login?: string;
  password?: string;
  email?: string;
  name?: string;
  phone?: string;
  role: UserRoleEnum;
}

export interface ResetPasswordDto {
  login: string;
  password: string;
}

export interface PageMetaDto {
  page: number;
  limit: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface PageDto {
  data: any[][];
  meta: PageMetaDto;
}

export interface UpdateUserDto {
  /**
   * Логин
   * @example "spl33t"
   */
  login?: string;
  /**
   * Email
   * @example "spl33t@ya.ru"
   */
  email?: string;
  /**
   * Имя
   * @example "Анастасия"
   */
  name?: string;
  /**
   * Телефон
   * @example "+7999999"
   */
  phone?: string;
  /**
   * Пароль
   * @example "****"
   */
  password?: string;
  /** Заблокирован ли пользователь */
  freeze?: boolean;
}

export interface CreatePerformingCompanyMemberDto {
  role: string;
  performingCompanyId: number;
}

export interface CreateLegalFaceDto {
  name: string;
  legalAddress?: string | null;
  actualAddress?: string | null;
  inn?: string | null;
  kpp?: string | null;
  ogrn?: string | null;
  ogrnip?: string | null;
  bankBik?: string | null;
  bankName?: string | null;
  phone?: string | null;
  email?: string | null;
  note?: string | null;
  checkingAccount?: string | null;
  correspondentAccount?: string | null;
  extraPhones?: string | null;
  providerCompanyId?: number | null;
  performingCompanyId?: number | null;
}

export interface UpdateLegalFaceDto {
  name?: string;
  mailAddress?: string;
  contactFaceName?: string;
  contactFaceEmail?: string;
  contactFacePhone?: string;
  generalDirectorName?: string;
  generalDirectorEmail?: string;
  generalDirectorPhone?: string;
  mainAccountantName?: string;
  mainAccountantPhone?: string;
  mainAccountantEmail?: string;
  phone?: string;
  email?: string;
  note?: string;
  legalAddress: string;
  actualAddress: string;
  inn: string;
  kpp: string;
  ogrn: string;
  ogrnip: string;
  bankBik: string;
  bankName: string;
  checkingAccount?: string;
  correspondentAccount?: string;
  extraPhones?: string;
}

export interface CreateProviderCompanyMemberDto {
  role: "PROVIDER_COMPANY_ADMIN" | "MANAGER_OF_PROVIDER_CARDS" | "MANAGER_OF_PROVIDER_ORDERS";
  name?: string;
  providerCompanyId: number;
  userId?: number;
}

export interface ProviderCompanyMemberModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /**
   * Уникальный индитефикатор юзера
   * @example 5
   */
  userId: number;
  /** Юзера */
  user: UserModel;
  /**
   * Уникальный индитефикатор провайдерской компании
   * @example 5
   */
  providerCompanyId: number;
  /** Провайдерская компания */
  providerCompany: ProviderCompanyModel;
}

export interface CreateProviderCompanyDto {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  providerCompanyType?: ProviderCompanyTypeEnum;
  interactionType?: ProviderCompanyInteractionTypeEnum;
  paymentType?: ProviderCompanyPaymentTypeEnum;
  note?: string;
  userIdWithManagerRole?: number;
}

export interface UpdateProviderCompanyDto {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  interactionType?: ProviderCompanyInteractionTypeEnum;
  paymentType?: ProviderCompanyPaymentTypeEnum;
  providerCompanyType?: ProviderCompanyTypeEnum;
  agentFee?: number;
  balance?: number;
  discount?: number;
  providerRemuneration?: number;
  returnPercentage?: number;
  note?: string;
  userIdWithManagerRole?: number;
}

export interface CreatePerformingCompanyDto {
  name: string;
  email?: string;
  phone?: string;
  cars?: string;
  carsCount?: number;
  cities?: string;
  note?: string;
}

export interface CreatePerformerReturn {
  performingCompany: PerformingCompanyModel;
  userWithTokens: UserWithTokensDto;
}

export interface UpdatePerformingCompanyDto {
  name?: string;
  phone?: string;
  email?: string;
  cars?: string;
  carsCount?: number;
  cities?: string;
  note?: string;
  balance?: number;
}

export interface CreateOrderDto {
  cardId?: number;
  cardCode?: number;
  clientPhone: string;
  clientName: string;
  clientEmail?: string;
  addressGet?: string;
  addressIn?: string;
  note?: string;
  providerId?: number | null;
}

export enum OrderAttributesEnum {
  CreateDate = "createDate",
  Id = "id",
  Status = "status",
  CompleteDate = "completeDate",
  ClosedDate = "closedDate",
  AddressGet = "addressGet",
  AddressIn = "addressIn",
  Cost = "cost",
  PaymentType = "paymentType",
  OrderType = "orderType",
  Note = "note",
  AutomobileName = "automobileName",
  AutomobileVinNumber = "automobileVinNumber",
  AutomobileGosNumber = "automobileGosNumber",
  ClientName = "clientName",
  ClientPhone = "clientPhone",
  ProviderName = "providerName",
  ProviderPhone = "providerPhone",
  PerformerName = "performerName",
  PerformerPhone = "performerPhone",
  PaymentToTheDriver = "paymentToTheDriver",
  BlockedWheels = "blockedWheels",
}

export interface UpdateOrderDto {
  /** @format date-time */
  completeDate?: Date | null;
  /** @format date-time */
  closeDate?: Date | null;
  acceptanceCertificate?: AcceptanceCertificate;
  addressGet?: string;
  addressIn?: string;
  orderType?: string;
  paymentType?: string;
  status?: string;
  cost?: number;
  note?: string;
  police?: string;
  loss?: string;
  vinNumber?: string;
  responsibleFace?: string;
  gosNumber?: string;
  carName?: string;
  paymentToTheDriver?: number;
  clientId?: number | null;
  clientPhone?: string;
  clientName?: string;
  clientEmail?: string;
  providerCompanyId?: number | null;
  performingCompanyId?: number | null;
  cardId?: number | null;
  blockedWheels?: number;
  kmLoadedTransport?: string;
}

export interface CreateClientDto {
  name: string;
  phone: string;
  city?: string;
  email?: string;
  passportSerial?: string;
  passportResidenceAddress?: string;
  passportIssuedFrom?: string;
  /** @format date-time */
  passportIssueDate?: Date;
  note?: string;
}

export interface UpdateClientDto {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  passportSerial?: string;
  passportIssuedFrom?: string;
  /** @format date-time */
  passportIssueDate?: Date | null;
  passportResidenceAddress?: string;
  note?: string;
}

export interface GenerateCardsDto {
  cardRangeId: number;
  countCardsGenerate: number;
}

export enum CardAttributesEnum {
  Id = "id",
  Code = "code",
  Status = "status",
  ValidFrom = "validFrom",
  ValidTo = "validTo",
  ValidMonths = "validMonths",
  TariffName = "tariffName",
  TariffCost = "tariffCost",
  AutomobileName = "automobileName",
  AutomobileVinNumber = "automobileVinNumber",
  AutomobileNameGosNumber = "automobileNameGosNumber",
  ClientName = "clientName",
  ClientPhone = "clientPhone",
  ProviderName = "providerName",
  ProviderPhone = "providerPhone",
}

export interface ValidateFilesDto {
  files: string[];
}

export interface CreateFileDto {
  files: string[];
  cardId?: number;
  orderId?: number;
}

export interface UpdateCardDto {
  status?: string;
  /** @format date-time */
  validFrom?: Date | null;
  /** @format date-time */
  validTo?: Date | null;
  clientPrice?: number;
  cardTariffId?: number | null;
  legalFaceId?: number | null;
  note?: string;
  clientId?: number | null;
  automobileId?: number | null;
}

export interface UpdateAutomobileDto {
  name?: string;
  gosNumber?: string;
  insurance?: string;
  vinNumber?: string;
  releaseYear?: number;
  mileage?: string;
  /** @format date-time */
  warrantyEndDate?: Date | null;
  costValuation?: string;
  note?: string;
}

export interface UpdateCardWithAssociationsDto {
  card?: UpdateCardDto;
  client?: UpdateClientDto;
  automobile?: UpdateAutomobileDto;
}

export interface CreateCardTariffDto {
  providerCompanyId: number;
  name: string;
  services: ServiceForTariffObject[];
  paymentMethod?: CardTariffPaymentMethodEnum;
  cost?: number;
}

export interface UpdateCardTariffDto {
  name?: string;
  paymentMethod?: CardTariffPaymentMethodEnum;
  services?: ServiceForTariffObject[];
  cost?: number;
}

export interface CreateCardServiceDto {
  name: string;
  description?: string;
}

export interface CardServiceModel {
  /** @format date-time */
  createdAt: Date;
  /** @format date-time */
  updatedAt: Date;
  id: number;
  /** Название услуги */
  name: string;
  /** Описание услуги */
  description: string;
}

export interface UpdateCardServiceDto {
  name?: string;
  description?: string;
}

export interface CreateCardRangeDto {
  providerCompanyId: number;
  rangeCode: number;
  cardCountInRange: number;
  cost?: number;
  rangeType?: CardRangeTypeEnum;
}

export interface UpdateCardRangeDto {
  currentRange?: number;
  cost?: number;
  rangeType?: CardRangeTypeEnum;
}

export interface CreateAutomobileDto {
  name?: string;
  gosNumber?: string;
  insurance?: string;
  vinNumber?: string;
  releaseYear?: number;
  mileage?: string;
  /** @format date-time */
  warrantyEndDate?: Date | null;
  costValuation?: string;
  note?: string;
}

export interface SetRateToOrderDto {
  cost: number;
}

export interface OrderRateByPerformerDto {
  cost: number;
  performingCompanyId: number;
}

export interface AcceptanceCertificateDto {
  isClean: boolean;
  frontGlass: boolean;
  hood: boolean;
  frontLightRight: boolean;
  frontLightLeft: boolean;
  antiFogLightRight: boolean;
  antiFogLightLeft: boolean;
  frontBumper: boolean;
  frontBumperSkirt: boolean;
  radiatorGrille: boolean;
  rightMirrorBackView: boolean;
  rightFrontFender: boolean;
  rightBackFender: boolean;
  rightFrontDoor: boolean;
  rightBackDoor: boolean;
  rightThreshold: boolean;
  rightFrontGlass: boolean;
  rightBackGlass: boolean;
  rightBackWindowLeaf: boolean;
  leftMirrorBackView: boolean;
  leftFrontFender: boolean;
  leftBackFender: boolean;
  leftFrontDoor: boolean;
  leftBackDoor: boolean;
  leftThreshold: boolean;
  leftFrontGlass: boolean;
  leftBackGlass: boolean;
  leftBackWindowLeaf: boolean;
  backGlass: boolean;
  trunkLid: boolean;
  backLightRight: boolean;
  backLightLeft: boolean;
  backBumper: boolean;
  backBumperSkirt: boolean;
  backBumperReflectorRight: boolean;
  backBumperReflectorLeft: boolean;
  backSpoiler: boolean;
  mufflerCapRight: boolean;
  mufflerCapLeft: boolean;
  roofFrontPart: boolean;
  roofBackPart: boolean;
  roofHatch: boolean;
  roofPanoramicView: boolean;
  isAgreeThisInspection: boolean;
}

export interface GetOneOrderResponse {
  id: number;
  addressGet: string;
  addressIn: string;
  assignedToOrder: boolean;
  orderType: string;
  paymentType: string;
  note: string;
  carName: string;
  status: string;
  rate: OrderRateByPerformerDto;
  hasRate: boolean;
  acceptanceCertificate: AcceptanceCertificateDto;
  photos: FileModel[];
  currentStep: number;
  clientPhone: string;
  clientName: string;
}

export interface UploadFilesDto {
  files: string[];
}

export interface UsersControllerGetAllParams {
  roles?: (
    | "ROOT"
    | "ADMIN"
    | "DISPATCHER"
    | "DISPATCHER_SENIOR"
    | "MANAGER_OF_PROVIDER_CARDS"
    | "MANAGER_OF_PROVIDER_ORDERS"
    | "PERFORMING_COMPANY_ADMIN"
    | "PROVIDER_COMPANY_ADMIN"
    | "CLIENT"
  )[];
  login?: string;
  name?: string;
  userType?: "CLIENT" | "ADMIN" | "EMPLOYEE";
}

export interface LegalFacesControllerGetAllParams {
  /**
   * @min 1
   * @default 1
   */
  page?: number;
  /**
   * @min 1
   * @max 50
   * @default 10
   */
  limit?: number;
  performingCompanyId?: number;
  providerCompanyId?: number;
}

export interface UsersControllerGetAll2Params {
  roles?: (
    | "ROOT"
    | "ADMIN"
    | "DISPATCHER"
    | "DISPATCHER_SENIOR"
    | "MANAGER_OF_PROVIDER_CARDS"
    | "MANAGER_OF_PROVIDER_ORDERS"
    | "PERFORMING_COMPANY_ADMIN"
    | "PROVIDER_COMPANY_ADMIN"
    | "CLIENT"
  )[];
  login?: string;
  name?: string;
  userType?: "CLIENT" | "ADMIN" | "EMPLOYEE";
}

export interface ProviderCompanyMembersControllerGetAllParams {
  providerCompanyId?: number;
}

export interface ProviderCompanyMembersControllerDeleteParams {
  providerCompanyId: number;
  userId: number;
}

export interface ProviderCompaniesControllerGetAllParams {
  name?: string;
}

export interface PerformingCompaniesControllerGetAllParams {
  name?: string;
  cities?: string;
  note?: string;
}

export interface MainCrmOrdersControllerGetAllParams {
  attributes?: OrderAttributesEnum[];
  note?: string;
  cities?: string;
  name?: string;
  phone?: string;
  id?: number;
  vinNumber?: string;
  carName?: string;
  /** @format date-time */
  createdRangeStart?: Date | null;
  /** @format date-time */
  createdRangeEnd?: Date | null;
  clientId?: number;
  addressGet?: string;
  status?: OrderStatusEnum;
  addressIn?: string;
  blockedWheels?: number;
  providerCompanyId?: object[];
  performingCompanyId?: object[];
}

export interface MainCrmOrdersControllerGetHistoryLogsParams {
  attributes?: OrderAttributesEnum[];
  note?: string;
  cities?: string;
  name?: string;
  phone?: string;
  id: number;
  vinNumber?: string;
  carName?: string;
  /** @format date-time */
  createdRangeStart?: Date | null;
  /** @format date-time */
  createdRangeEnd?: Date | null;
  providerCompanyId?: object[];
  performingCompanyId?: object[];
  clientId?: number;
  addressGet?: string;
  status?: OrderStatusEnum;
  addressIn?: string;
  blockedWheels?: number;
}

export interface MainCrmOrdersControllerGetExcelFileTableAuditParams {
  attributes?: OrderAttributesEnum[];
  note?: string;
  cities?: string;
  name?: string;
  phone?: string;
  id?: number;
  vinNumber?: string;
  carName?: string;
  /** @format date-time */
  createdRangeStart?: Date | null;
  /** @format date-time */
  createdRangeEnd?: Date | null;
  clientId?: number;
  addressGet?: string;
  status?: OrderStatusEnum;
  addressIn?: string;
  blockedWheels?: number;
}

export interface LegalFacesControllerGetAll2Params {
  /**
   * @min 1
   * @default 1
   */
  page?: number;
  /**
   * @min 1
   * @max 50
   * @default 10
   */
  limit?: number;
  performingCompanyId?: number;
  providerCompanyId?: number;
}

export interface ClientsControllerGetAllParams {
  name?: string;
  phone?: string;
}

export interface CardsControllerGetAllParams {
  code?: number;
  attributes?: CardAttributesEnum[];
  status?: CardStatusEnum;
  rangeType?: CardRangeTypeEnum;
  /** @format date-time */
  validFrom?: Date | null;
  /** @format date-time */
  validTo?: Date | null;
  providerCompanyId?: number;
  providerCompanyName?: string;
  cardRangeId?: number;
  clientPhone?: string;
  clientName?: string;
}

export interface CardsControllerGetExcelFileTableAuditParams {
  code?: number;
  attributes?: CardAttributesEnum[];
  status?: CardStatusEnum;
  rangeType?: CardRangeTypeEnum;
  /** @format date-time */
  validFrom?: Date | null;
  /** @format date-time */
  validTo?: Date | null;
  providerCompanyId?: number;
  providerCompanyName?: string;
  cardRangeId?: number;
  clientPhone?: string;
  clientName?: string;
}

export interface CardRangesControllerGetAllParams {
  providerCompanyId?: number;
  rangeCode?: number;
}

export interface AutomobilesControllerGetAllParams {
  name?: string;
  vinNumber?: string;
  gosNumber?: string;
}

export interface CardsControllerGetAllCardsOfCurrentSessionParams {
  code?: number;
  attributes?: CardAttributesEnum[];
  status?: CardStatusEnum;
  rangeType?: CardRangeTypeEnum;
  /** @format date-time */
  validFrom?: Date | null;
  /** @format date-time */
  validTo?: Date | null;
  providerCompanyId?: number;
  providerCompanyName?: string;
  cardRangeId?: number;
  clientPhone?: string;
  clientName?: string;
}

export interface CardRangesControllerGetAllCardRangesOfCurrentSessionParams {
  providerCompanyId?: number;
  rangeCode?: number;
}

export interface PerformersCrmOrdersControllerGetAllOrdersFromCompanyCityParams {
  attributes?: OrderAttributesEnum[];
  note?: string;
  cities?: string;
  name?: string;
  phone?: string;
  id?: number;
  vinNumber?: string;
  carName?: string;
  /** @format date-time */
  createdRangeStart?: Date | null;
  /** @format date-time */
  createdRangeEnd?: Date | null;
  clientId?: number;
  addressGet?: string;
  status?: OrderStatusEnum;
  addressIn?: string;
  blockedWheels?: number;
}
