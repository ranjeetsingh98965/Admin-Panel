import snackbar from '../../components/snackbar';
import services from '../services';

const service = new services();
export default async function loginWithEmailAndPasswordAction(data: any) {
  try {
    let response = await service.loginUserthroughApi(data);
    return response;
  } catch (err) {
    snackbar('err: ' + err);
  }
}
