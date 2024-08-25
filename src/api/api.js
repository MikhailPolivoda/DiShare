const BASE_URL = '/api/ssoservice/json/authenticate'; // Настройте базовый URL

export async function authenticate(email, password) {
    const data = {
        authId: "eyAidHlwIjogIkpXVCIsICJhbGciOiAiSFMyNTYiIH0.eyAib3RrIjogImI2ZnA1ZzhpMmZsMnA2Zm91dGg2YmlpbmhkIiwgInJlYWxtIjogIm89aWRvLG89bG9naW4sb3U9c2VydmljZXMsZGM9b3BlbmFtLGRjPWNpdSxkYz1uc3R1LGRjPXJ1IiwgInNlc3Npb25JZCI6ICJBUUlDNXdNMkxZNFNmY3lZRGhWQ1F3MjM5ZlRsRFZfUVg1UEp6VVRoakdsVHVCYy4qQUFKVFNRQUNNRElBQWxOTEFCUXROak00TURjeU1UUXpNakV5TkRrMk1UTTNNZy4uKiIgfQ.mUl5FCR_AREgylmZjoHbtm2nXksoYfayI576ui7KoCU",
        template: "",
        stage: "JDBCExt1",
        header: "Авторизация",
        callbacks: [
            {
                type: "NameCallback",
                output: [
                    { name: "prompt", value: "Логин:" }
                ],
                input: [
                    { name: "IDToken1", value: email }
                ]
            },
            {
                type: "PasswordCallback",
                output: [
                    { name: "prompt", value: "Пароль:" }
                ],
                input: [
                    { name: "IDToken2", value: password }
                ]
            }
        ]
    };

    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-API-Version': 'protocol=1.0,resource=2.0',
                'Accept-Language': 'ru,en;q=0.9',
                'Content-Type': 'application/json',
                'Origin': 'https://login.nstu.ru',
                'Referer': 'https://login.nstu.ru/ssoservice/XUI/',
                'X-NoSession': 'true',
                'X-Password': 'anonymous',
                'X-Requested-With': 'XMLHttpRequest',
                'X-Username': 'anonymous',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}
