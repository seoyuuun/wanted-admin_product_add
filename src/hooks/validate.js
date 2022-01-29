export default function SubmitValidation({ exposuredeadline, salesdeadline }) {
  const errors = {};

  if (!exposuredeadline) {
    errors.name = '필수값이 입력되지 않았습니다.';
  }
  return errors;
}
