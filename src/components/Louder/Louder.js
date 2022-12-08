import { Vortex} from 'react-loader-spinner';
import css from './Louder.module.css';

export const Louder = () => (
  <div className={css.Loader}>
    <Vortex 
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />
  </div>
);
