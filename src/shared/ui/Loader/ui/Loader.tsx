import { ReactComponent as Spinner } from '@/shared/assets/spinner.svg';

import cls from './Loader.module.css';
export const Loader = () => {
    return (
        <div className={cls.Loader}>
            <Spinner/>
        </div>
    )
}