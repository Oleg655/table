import { useState } from 'react';

import { setFilteredUser, setNewUserData, setTotalElements } from 'actions';
import Modal from 'components/Modal';
import { Paths } from 'enums';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { FormI } from 'interfaces';
import './form.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormPropsT = {
    action: (data: FormI) => ReturnType<typeof setNewUserData> | ReturnType<typeof setFilteredUser>;
    name: string;
};

const Form = ({ action, name }: FormPropsT) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormI>({
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<FormI> = data => {
        dispatch(action(data));
        if (name === 'Найти') {
            navigate(Paths.TABLE_FILTERED);
            dispatch(setTotalElements(1));
        }
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
                {name}
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
                        <div>
                            {errors.firstName && (
                                <div className="error">{errors.firstName.message}</div>
                            )}
                        </div>
                    </label>

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
                    <div className="actions">
                        <button className="form-btn" type="submit">
                            {name}
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
