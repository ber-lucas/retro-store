import { Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Store from './pages/Store';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/store' element={<Store />}/>
        </Routes>
    )
}

export default MainRoutes;
