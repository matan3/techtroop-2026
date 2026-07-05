import { useReducer } from 'react';

// Define your initial state
const initialState = {
    currentStep: 1,
    formData: {
        // Step 1
        name: '',
        email: '',
        age: '',
        // Step 2  
        username: '',
        password: '',
        confirmPassword: '',
        // Step 3
        newsletter: false,
        notifications: true,
        theme: 'light'
    },
    errors: {},
    isSubmitting: false,
    isCompleted: false
};

// Create reducer that handles:
function formReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.data.field]: action.data.value
                }
            };
        case 'SET_ERRORS':
            return {
                ...state,
                errors: action.data
            };
        case 'NEXT_STEP': {
            const nextErrors = validateStep(state.currentStep, state.formData);
            const hasErrors = Object.keys(nextErrors).length > 0;

            if (hasErrors) {
                return {
                    ...state,
                    errors: nextErrors
                };
            }

            return {
                ...state,
                currentStep: state.currentStep + 1,
                errors: {}
            };
        }
        case 'PREV_STEP':
            return {
                ...state,
                currentStep: state.currentStep - 1,
            };
        case 'SUBMIT_FORM':
            return {
                ...state,
                isSubmitting: true
            };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
}

function validateStep(currentStep, formData) {
    const errors = {};

    if (currentStep === 1) {
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.includes('@')) errors.email = 'Invalid email';
        if (Number(formData.age) < 18) errors.age = 'Must be 18 or older';
    }

    if (currentStep === 2) {
        if (formData.username.length < 3) errors.username = 'Username must be 3+ chars';
        if (formData.password.length < 6) errors.password = 'Password must be 6+ chars';
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
    }

    return errors;
}


function FormWizard() {

    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        dispatch({
            type: 'UPDATE_FIELD',
            data: { field: name, value: fieldValue }
        });
    };


    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
            <h2>Step {state.currentStep} of 3</h2>

            {state.currentStep === 1 && (
                <div>
                    <h3>Personal Info</h3>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={state.formData.name} onChange={handleChange} />
                        {state.errors.name && <p style={{ color: 'red' }}>{state.errors.name}</p>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={state.formData.email} onChange={handleChange} />
                        {state.errors.email && <p style={{ color: 'red' }}>{state.errors.email}</p>}
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="number" name="age" value={state.formData.age} onChange={handleChange} />
                        {state.errors.age && <p style={{ color: 'red' }}>{state.errors.age}</p>}
                    </div>
                </div>
            )}

            {state.currentStep === 2 && (
                <div>
                    <h3>Account Details</h3>
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" value={state.formData.username} onChange={handleChange} />
                        {state.errors.username && <p style={{ color: 'red' }}>{state.errors.username}</p>}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={state.formData.password} onChange={handleChange} />
                        {state.errors.password && <p style={{ color: 'red' }}>{state.errors.password}</p>}
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" name="confirmPassword" value={state.formData.confirmPassword} onChange={handleChange} />
                        {state.errors.confirmPassword && <p style={{ color: 'red' }}>{state.errors.confirmPassword}</p>}
                    </div>
                </div>
            )}

            {state.currentStep === 3 && (
                <div>
                    <h3>Preferences</h3>
                    <div>
                        <label>
                            <input type="checkbox" name="newsletter" checked={state.formData.newsletter} onChange={handleChange} />
                            Subscribe to Newsletter
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="notifications" checked={state.formData.notifications} onChange={handleChange} />
                            Enable Notifications
                        </label>
                    </div>
                    <div>
                        <label>Theme:</label>
                        <select name="theme" value={state.formData.theme} onChange={handleChange}>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                </div>
            )}


            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                {state.currentStep > 1 && (
                    <button type="button" onClick={() => dispatch({ type: 'PREV_STEP' })}>
                        Back
                    </button>
                )}

                {state.currentStep < 3 ? (
                    <button type="button" onClick={() => dispatch({ type: 'NEXT_STEP' })}>
                        Next
                    </button>
                ) : (
                    <button type="button" onClick={() => dispatch({ type: 'SUBMIT_FORM' })}>
                        Submit
                    </button>
                )}
            </div>

            {state.isSubmitting && (
                <div style={{ marginTop: '20px', color: 'green' }}>
                    <h3>Registration Successful!</h3>
                    <button type="button" onClick={() => dispatch({ type: 'RESET_FORM' })}>Reset Form</button>
                </div>
            )}
        </div>
    );

}
export default FormWizard