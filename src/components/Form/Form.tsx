import { useState } from 'react';

// import { setNewUserData } from 'actions';
import Modal from 'components/Modal';
import { FormI } from 'interfaces';
import './form.css';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { useAppDispatch } from 'hooks/useAppDispatch';

const Form = () => {
    const [showModal, setShowModal] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormI>({
        mode: 'onBlur',
    });

    const onSubmit: SubmitHandler<FormI> = data => {
        console.log(data);
        setShowModal(false);
        reset();
    };

    // const dispatch = useAppDispatch();

    return (
        <>
            <button
                className="form-btn"
                type="submit"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Add pack
            </button>
            <Modal show={showModal} backgroundOnClick={() => setShowModal(false)}>
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <label htmlFor="id">
                        Your id
                        <input {...register('id', { required: 'id is required' })} />
                        {errors.id && <div className="error">{errors.id.message}</div>}
                    </label>

                    <div>
                        <label htmlFor="firstName">
                            Your Name
                            <input {...register('firstName', { required: 'name is required' })} />
                            {errors.firstName && (
                                <div className="error">{errors.firstName.message}</div>
                            )}
                        </label>
                    </div>

                    <label htmlFor="lastName">
                        Your LastName
                        <input {...register('lastName', { required: 'last name is required' })} />
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
                        <input id="phone" />
                    </label>
                    <button className="form-btn" type="submit">
                        Добавить в таблицу
                    </button>
                    <button className="form-btn" type="button" onClick={() => setShowModal(false)}>
                        Cancel
                    </button>
                </form>
            </Modal>
        </>
    );
};

export default Form;
