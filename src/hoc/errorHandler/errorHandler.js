import React, {useEffect, useState} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary';

const ErrorHandler = (Wrapped, axios) => {

    const Error = props => {

        const [err,
            setErr] = useState(null);

        const reqInterceptor = axios
            .interceptors
            .request
            .use(req => {
                setErr(null);
                return req;
            });

        const resInterceptor = axios
            .interceptors
            .response
            .use(res => res, err => {
                setErr(err);
            });

        useEffect(() => {
            return () => {
                axios
                    .interceptors
                    .request
                    .eject(reqInterceptor);
                axios
                    .interceptors
                    .response
                    .eject(resInterceptor);
            }

        }, [reqInterceptor, resInterceptor]);

        const confirmErrorHandler = () => {
            setErr(null);
        }

        return (
            <Aux>
                <Modal
                    show={err
                    ? true
                    : false}
                    dismiss={confirmErrorHandler}>
                    <h3>Something went wrong!</h3>
                    {err
                        ? <p>{err.message}</p>
                        : ''}
                </Modal>
                <Wrapped {...props}></Wrapped>
            </Aux>
        )
    }

    return Error;
}

export default ErrorHandler;