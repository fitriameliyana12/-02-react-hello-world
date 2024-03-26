
import { Provider } from 'react-redux';
import { store } from '../redux/store/store'; // Import your Redux store


export default function App() {
    return (
        <Provider store={store}>
            <LoginCheck />
        </Provider>
    );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '@/redux/auth/authSlice';
import "bootstrap/dist/css/bootstrap.min.css";
import parse from 'html-react-parser';

function LoginCheck() {
    const { isLogin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    function handleAuth(type) {
        const loginStatus = type === 'login';
        dispatch(setLogin({ isLogin: loginStatus }));
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header">status Login</div>
                         <div className="card-body">
                            { isLogin ?
                            [ // jika berhasil login (istogin = true)
                                 parse('<div class="alert alert-success">Yay, berhasil login!!!</div>'),
                                <button className="btn btn-md btn-danger" onClick={() => handleAuth( 'logout ')}>Log out</button>
                            ]
                            :
                            [ // jika telah logout (isLogin = false)

                                parse('<div class="alert alert-dark">Anda telah logout!</div>'),
                                <button className="btn btn-md btn-primary" onClick={() => handleAuth('login')}>Log in</button>
                            ]
                        }
                     </div>
                </div>
             </div>
         </div>
     </div>
    );
}

