import titleBlockMainDataBgrImage from '../images/title-block-main-bgr.svg';
import titleBlockHistoryDataBgrImage from '../images/title-block-history-bgr.svg';
import titleBlockAboutDataBgrImage from '../images/title-block-about-bgr.svg';

const titleBlockMainData = {
  title: 'Привет!',
  textContent: 'Мы команда TalkSolver. По новому закону 2025 года, для защиты ' +
    'общественной нравственности к рассмотрению в какую-либо службу принимаются ' +
    'только обращения, написанные цитатами поэтов-классиков. Для этого мы создали ' +
    'данное приложение.',
  bgrImage: titleBlockMainDataBgrImage,
};

const titleBlockHistoryData = {
  title: 'Наша миссия',
  textContent: 'Наш проект помогает защитить общественную мораль, поскольку к рассмотрению ' +
    'принимаются только обращения, написанные с цитатами из произведений  классиков. Поэтому ' +
    'мы создали сервис, который поможет переформулировать обычную речь в цитату писателей.',
  bgrImage: titleBlockHistoryDataBgrImage,
};

const titleBlockAboutData = {
  title: 'О нас',
  textContent: 'Мы молодая команда, которая реализовала свою любовь к литературе с помощью  данного сервиса. ' +
    'Надеемся, что мы смогли помочь тебе обратиться в нужную службу не тратя время на поиск более точной формулировку твоей проблемы.',
  bgrImage: titleBlockAboutDataBgrImage,
};

const titleBlockContactData = {
  title: '',
  textContent: '',
  image: '*'
};

export {
  titleBlockMainData,
  titleBlockAboutData,
  titleBlockContactData,
  titleBlockHistoryData,
};