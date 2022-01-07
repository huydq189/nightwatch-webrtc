describe('GoMeet Demo', function() {
  var serverURL = 'https://gomesainterb03.vnpt.vn/bigbluebutton/api/join?fullName=User+164546&meetingID=random-762815&password=mp&redirect=true&checksum=cde21b04de689213150fe50e9473e7569f213f84';
  var sec = 1000;
  var waitingTimeToNext = 2 * sec;

  before(browser => browser.url(serverURL));

  test('Test GoMeet', function (browser) {
    browser
      .pause(waitingTimeToNext)
      .waitForElementVisible('button[aria-label="Chỉ nghe"]')
      .click('button[aria-label="Chỉ nghe"]')
      .pause(waitingTimeToNext)
      .waitForElementVisible('button[aria-label="Chia sẻ camera"]')
      .click('button[aria-label="Chia sẻ camera"]')
      .pause(waitingTimeToNext)
      .waitForElementVisible('button[aria-label="Bắt đầu chia sẻ"]')
      .click('button[aria-label="Bắt đầu chia sẻ"]')
      .pause(10 * 60 * sec);
  });

  after(browser => browser.end());
});
