// /* Инициализировать Swiper */
new Swiper('.image__slider', {
  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // Навигация
  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.swiper-pagination',
    
    // Буллеты
    clickable: true,
    // Динамические Буллеты
    dynamicBullets: true,
    // Кастомные Буллеты
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    
    /* 
    // Фракция
    type: 'fraction',
    // Кастомный вывод фракции
    renderFraction: function (currentClass, totalClass) {
      return 'Фото <span class="' + currentClass + '"></span>' + 
      ' из ' + 
      '<span class="' + totalClass + '"></span>';
    },
    */
    /* 
    // Прогрессбар или заполняемая полоска
    type: 'progressbar',
     */    
  },
  
  // Скролл
  scrollbar: {
    el: '.swiper-scrollbar',
    // Возможность перетаскивать скролл
    draggable: true,
  },
  
  // Включение.отключение
  // Перетаскивание на ПК
  simulateTouch: true, //Отключмить false
  // Чувствительность свойства перетаскивания
  //'По умолчанию 1.' '0 запретит перетаскивание на всех устройствах' '2,3,4 и выше увеличивает чувствительность'
  touchRatio: 1,
  // Угол срабатывания свойства/перетаскивания
  touchAngle: 45,
  // Курсор перетаскивания
  grabCursor: true,
  // Переключение при клике на слайд
  slideToClickedSlide: true, // Пока не разобрался как работает

  /* Внимание!!! Включенная 'Навигация по хешу' синхронизирует одинаковые слайдеры на сайте*/
  // Навигация по хешу
  hashNavigation: {
    // Отслеживает состояние
    watchState: true,
  },
  /* Внимание!!! Включенная 'Навигация по хешу' синхронизирует одинаковые слайдеры на сайте*/

  // Управление клавиатурой
  keyboard: {
    // Включить/выключить
    enabled: true,
    // Включить/выключить
    // только когда слайдер
    // в пределах вьюпорта
    onlyInWiewport: true,
    // Включить/выключить
    // управление клавишами
    // pageUp , pageDown
    pageUpDown: true,
  },

  // Управление еолесом мыщи
  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
    // Класс обьекта на котором
    // будет срабатывать прокрутка мышью
    // eventsTarget: '.image__slider',
  }, 

  // Количество слайдов для показа
  slidesPerView: 3,
   /*  'auto' ' Автоширина css стили  " .image__slider .swiper-slide { width: auto; } " ' */  

  // Отключение функционала
  // если слайдов меньше чем нужно
  watchOverflow: true,

  // Отступ между слайдами
  spaceBetween: 30,

  // Количество пролистываемых слфйдов
  slidesPerGroup: 1,

  // Активный слайд по центру
  // centeredSlides: true,

  // Стартовый слайд
  initialSlide: 0,

  // Мультирядность при 2 и более autoHeight: false,
  // slidesPerColumn: 2,

   // Автовысота 
  autoHeight: true,

  // Бесконечое перелистывание слайдера
  loop: false, //Включить true
  // При бесконечном перелистывании
  // Скролл нужно отключить
  // Мультирядность тоже работать не будет
  /* Количество слайдов для показа со значением slidesPerView: 'auto',
    добавляем настройку ' Кол-во дублирующих сладов ' */  
  // Кол-во дублирующих сладов
  loopedSlides: 0,

  // Свободный режим
  // freeMode: true,

  // Автопрокрутка
  // autoplay: {
  //   // Пауза между прокруткой
  //   delay: 1000,
  //   // Закончить на последнем слайде
  //   stopOnLastSlide: true,
  //   // Отключить после ручного переключения
  //   disableOnInteraction: false,
  // },
  // Скорость переключения слайдера
  speed: 1000,

  // Вертикальный слайдер
  // direction: 'vertical',

  // Эффекты переключения сдадов  
  // Листание По умолчанию
  effect: 'slide', 

  // Смена прозрачности
  // effect: 'fade',
  // // Дополнение к fade
  // fadeEffect: {
  //   // Параллельная
  //   // смена прозрачности
  //   crossFade: true,
  // },
    // Переворот
    // effect: 'flip',
    // // Дополнение к flip
    // flipEffect: {
    //   // Тень
    //   slideShadows: true,
    //   // Показ только активного слайда
    //   limitRotation: true,
    // },
    // Куб
    // effect: 'cube',
    // // Дополнение к cube
    // cubeEffect: {
    //   // Настройки тени
    //   slideShadows: true,
    //   shadow: true,
    //   shadowOffset: 20,
    //   shadowScale: 0.94,
    // },
    // Эффект потока
    // effect: 'coverflow',
    // // Дополнение к coverflow
    // coverflowEffect: {
    //   // Угол
    //   rotate: 20,
    //   // Наложение
    //   stretch: 50,
    //   // Тень
    //   slideShadows: true,
    // },

    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
      // 320: {
      //   slidesPerView: 1,
      // },
      // 480: {
      //   slidesPerView: 2,
      // },
      // 992: {
      //   slidesPerView: 3,
      // },

      /* '@0.75': {
        slidesPerView: 1,
      },
      '@1.0': {
        slidesPerView: 2,
      },
      '@1.50': {
        slidesPerView: 3,
      }, */
    },

    // Отключить предзагрузку картинок
    preloadImages: false,
    // Lazy loading
    // Подгрузка картинок
    lazy: {
      // Подгружать на старте
      // переключения слайда
      loadOnTransitionStart: false,
      // Подгрузить предыдущую
      // и следующую картинки
      loadPrevNext: false,
    },
    // Слежка за видимыми слайдами
    watchSlidesProgress: true,
    // Добавление класса видимым слайдам
    watchSlidesVisibility: true,

    // Зум картинка
    // zoom: {
    //   // Максимальное увеличение
    //   maxRatio: 5,
    //   // Минимальное увеличение
    //   minRatio: 1,
    // },

  // Затухание
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // },



});