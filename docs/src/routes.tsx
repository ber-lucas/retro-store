import { Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Store from './pages/Store';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/store' element={<Store />}/>
            <Route path='/profile' element={<Profile />}/>

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default MainRoutes;
