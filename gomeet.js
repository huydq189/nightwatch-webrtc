describe('GoMeet Demo', function() {
  var serverURL = 'https://gomesainterb03.vnpt.vn/bigbluebutton/api/join?fullName=User+5157644&meetingID=random-9539007&password=mp&redirect=true&checksum=327363f092f4387b2e6a188501e5c27516fb60e0';
  var sec = 1000;
  var waitingTimeToNext = 10 * sec;

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
      .pause(7 * 60 * sec);
  });

  after(browser => browser.end());
});
