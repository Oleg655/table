import { useState } from 'react';

import { setNewUserData } from 'actions';
import Modal from 'components/Modal';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { FormI } from 'interfaces';
import './form.css';
import { SubmitHandler, useForm } from 'react-hook-form';

const Form = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormI>({
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<FormI> = data => {
        dispatch(setNewUserData(data));
        setShowModal(false);
        reset();
    };

    return (
        <>
            <button
                className="form-btn"
                type="submit"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Добавить
            </button>
            <Modal show={showModal} backgroundOnClick={() => setShowModal(false)}>
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <label htmlFor="id">
                        Your id
                        <input
                            {...register('id', {
                                required: 'id is required',
                                pattern: {
                                    value: /^\d+$/,
                                    message: 'id must be a digit',
                                },
                            })}
                        />
                        {errors.id && <div className="error">{errors.id.message}</div>}
                    </label>

                    <div>
                        <label htmlFor="firstName">
                            Your Name
                            <input
                                {...register('firstName', {
                                    required: 'name is required',
                                    pattern: {
                                        value: /^[A-Z]+$/i,
                                        message: 'enter valid name',
                                    },
                                })}
                            />
                            {errors.firstName && (
                                <div className="error">{errors.firstName.message}</div>
                            )}
                        </label>
                    </div>

                    <label htmlFor="lastName">
                        Your LastName
                        <input
                            {...register('lastName', {
                                required: 'last name is required',
                                pattern: {
                                    value: /^[A-Z]+$/i,
                                    message: 'enter valid last name',
                                },
                            })}
                        />
                        {errors.lastName && <div className="error">{errors.lastName.message}</div>}
                    </label>

                    <label htmlFor="email">
                        Your email
                        <input
                            {...register('email', {
                                required: 'email is required',
                                pattern: {
                                    value: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i,
                                    message: 'enter valid email',
                                },
                            })}
                        />
                        {errors.firstName && (
                            <div className="error">{errors.firstName.message}</div>
                        )}
                    </label>
                    <label htmlFor="phone">
                        Your phone
                        <input
                            {...register('phone', {
                                required: 'phone is required',
                                pattern: {
                                    value: /^\d{3}-\d{3}-\d{4}/g,
                                    message: `enter valid phone with 10 numbers 'XXX-XXX-XXXX'`,
                                },
                            })}
                        />
                        {errors.phone && <div className="error">{errors.phone.message}</div>}
                    </label>
                    <div>
                        <button className="form-btn" type="submit">
                            Добавить в таблицу
                        </button>
                        <button
                            className="form-btn"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default Form;
