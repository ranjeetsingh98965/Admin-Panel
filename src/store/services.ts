export default class services {
  async loginUserthroughApi(userData: any) {
    // const email = 'abc@gmail.com';
    // const password = '123456';
    const email = '0000';
    const password = '0000';
    // const url = 'https://apiapp.ixambee.com/api/admin_login_app';
    // let res: any = await fetch(url, {
    //   method: 'POST',
    //   headers: {'content-Type': 'application/json'},
    //   body: JSON.stringify(userData),
    // });
    // res = await res.json();
    // // console.log(res.payload[1][0].email);
    // console.log(res.payload);

    if (userData.email == email && userData.password == password) {
      return 'success';
    } else if (userData.email == email && userData.password != password) {
      return 'passErr';
    } else {
      return 'noData';
    }
  }
}
