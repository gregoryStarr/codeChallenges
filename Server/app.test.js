var router = require("./routes/video")

test('failed login (bad password)', async () => {
    let data;
try {
    data = await router('me@example.com', 'wrong_password');
    fail();
} catch(e) {
    expect(e.response.data.error).toMatchSnapshot();
}
});