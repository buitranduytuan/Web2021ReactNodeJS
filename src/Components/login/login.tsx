import { yupResolver } from '@hookform/resolvers/yup';
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import TestClick from './testClick';

// Buif Traan Duyt Tuasn
const schema = yup.object().shape({
  username: yup.string().required('Vui lòng nhập UserName'),
  password: yup.string().required('Password không được để trống'),
});

function Login() {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [name, setName] = useState('');

  const dataSubmit = {
    a: 'a',
    b: 'b',
    c: 'c',
  };

  const xxx: Array<{ name: string; value: string }> = [];

  Object.entries(dataSubmit).forEach(([key, value]) => {
    xxx.push({
      name: key,
      value: value,
    });
  });

  const setNameFunc = (nameVl: string) => {
    console.log('111');
    setName(nameVl);
  };

  const element = [];
  element.push(<p>123213</p>);
  element.push(<p>123214</p>);
  element.push(<p>123215</p>);

  const onSubmit = (data: any) => {
    console.log('222');
    console.log({ ...data, nameTT: name });
  };

  return (
    <div
      className="modal fade"
      id="exampleModalLogin"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center">Log In</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="col-form-label" key={123}>
                  Username
                </label>
                {Object.entries(element).map(([, el]) => (
                  <Fragment key={Math.random()}>{el}</Fragment>
                ))}
                <TestClick func={setNameFunc} />
                <input
                  type="text"
                  className="form-control"
                  placeholder=" "
                  style={errors?.username && { borderColor: 'red' }}
                  ref={register}
                  name="username"
                />
                {errors?.username && (
                  <p style={{ color: 'red', fontSize: '14px' }}>
                    {errors?.username?.message}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label className="col-form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder=" "
                  name="password"
                  style={errors?.password && { borderColor: 'red' }}
                  ref={register}
                  // invalid={errors?.password}
                />

                {errors?.password && (
                  <p style={{ color: 'red', fontSize: '14px' }}>
                    {errors?.password?.message}
                  </p>
                )}
              </div>
              <div className="right-w3l">
                <input
                  type="submit"
                  className="form-control"
                  defaultValue="Log in"
                />
              </div>
              <div className="sub-w3l">
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlAutosizing"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customControlAutosizing"
                  >
                    Remember me?
                  </label>
                </div>
              </div>
              <p className="text-center dont-do mt-3">
                Don`&apos;`t have an account?
                <a href="#" data-toggle="modal" data-target="#exampleModal2">
                  Register Now
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
