import gsap from 'gsap';

export default class UtilityMethods {
  // Getting the given element in the HTML , where all the code goes

  static rootElement = document.querySelector('#app');

  // This method will help to create elements , its class, the text and the append to the parent. The argument is setup according to its importance

  static createElement(tagName, parentName, className, texts) {
    const element = document.createElement(tagName);
    if (className) {
      className = className.split(' ');
      for (let i = 0; i < className.length; i++) {
        element.classList.add(className[i]);
      }
    }

    if (texts) {
      element.textContent = texts;
    }

    parentName.appendChild(element);

    return element;
  }

  // This method will help in formatting time according to the given time zone

  static formateTime(timeData, timeZone) {
    const utcTime = timeData * 1000;
    const timezoneOffsetMs = timeZone * 1000;

    const setTime = new Date(utcTime + timezoneOffsetMs);

    const setTimeSting = new Intl.DateTimeFormat('en-us', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'UTC',
    }).format(setTime);

    return setTimeSting;
  }

  // live message that will be render for 4.5 seconds when user need any guidance

  static liveMsg(msg) {
    const msgBox = this.createElement('div', this.rootElement, 'msg-box', null);
    this.createElement('h2', msgBox, 'msg-text', `${msg}`);
    this.createElement('div', msgBox, 'progress-bar', null);

    setTimeout(() => {
      msgBox.remove();
    }, 1000 * 4.5);

    gsap.from(msgBox, {
      y: -100,
      opacity: 0,
      duration: 1.15,
      ease: 'back.inOut',
    });
  }
}
