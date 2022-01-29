import useForm from './useForm';
import validate from './validate';

const SubmitForm = () => {
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      exposuredeadline: '',
      salesdeadline: '',
      categories: [],
      filtertags: [],
      title: '',
      desc: '',
      code: '',
      thumbnamil: '',
      representativeimages: [],
      stock: 0,
      option: {
        image: '',
        optiontit: '',
        regularprice: 0,
        sellingprice: 0,
        stock: '',
        taxation: '',
        addoption: {
          optiontit: '',
          regularprice: 0,
        },
      },
      introimages: [],
      recommandedimages: [],
      informationnotice: {
        productname: '',
        origin: '',
        ranking: '',
        custody: '',
        foodcode: '',
        key: '',
      },
      deliverydesignation: '',
      pickup: '',
      preorderdelivery: '',
      mileage: '',
      thankyoucard: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="exposuredeadline"
        onChange={handleChange}
        value={values.exposuredeadline}
      />
      <p>{errors.email}</p>
      <button type="submit" disabled={submitting}>
        제출
      </button>
    </form>
  );
};

export default SubmitForm;
