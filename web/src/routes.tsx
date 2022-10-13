import { Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Store from './pages/Store';
import Profile from './pages/Profile';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/store' element={<Store />}/>
            <Route path='/profile' element={<Profile />}/>
        </Routes>
    )
}

export default MainRoutes;
