import classNames from 'classnames/bind';
import styles from './Terms.module.scss';
import ButtonGreen from 'src/components/ButtonGreen';
const cx = classNames.bind(styles);

const Terms = () => {
    return (
        <div className={cx('term')}>
            <div className={cx('term-container')}>
                <input id="term1" type="checkbox" className={cx('term-container-input')} />
                <label htmlFor={'term1'} className={cx('term-container-label')}>
                    <span className={cx('term-container-check')}></span>
                    <span className={cx('term-container-description')}>
                        I would prefer not to receive marketing messages from Spotify
                    </span>
                </label>
            </div>

            <div className={cx('term-container')}>
                <input id="term2" type="checkbox" className={cx('term-container-input')} />
                <label htmlFor={'term2'} className={cx('term-container-label')}>
                    <span className={cx('term-container-check')}></span>
                    <span className={cx('term-container-description')}>
                        I would prefer not to receive marketing messages from Spotify
                    </span>
                </label>
            </div>

            <div className={cx('more-term')}>
                <div className={cx('more-term-item')}>
                    By clicking on sign-up, you agree to Spotify's{' '}
                    <a href="#" className={cx('more-term-item-link')}>
                        Terms and Conditions of Use
                    </a>
                    .
                </div>

                <div className={cx('more-term-item')}>
                    To learn more about how Spotify collects, uses, shares and protects your personal data, please see{' '}
                    <a href="#" className={cx('more-term-item-link')}>
                        Spotify's Privacy Policy
                    </a>
                    .
                </div>
            </div>

            <div>
                <ButtonGreen>Submit</ButtonGreen>
            </div>
        </div>
    );
};

export default Terms;
