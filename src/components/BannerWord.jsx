import React from 'react';
import { useTranslation } from 'react-i18next';

function BannerWord() {
    /* Traduction */
    const { t } = useTranslation();

    
  return (
    <div className="wordSlogan">
        <div className="words">
            <div className="word">
                <h2 className="slogan1 hidden up delay-100">{t('home:home:we')} <br/> {t('home:home:create')}</h2>
            </div>
            <div className="word">
                <h2 className="slogan2 hidden up delay-300">{t('home:home:we')} <br/> {t('home:home:innovate')}</h2>
            </div>
            <div className="word">
                <h2 className="slogan3 hidden up delay-500">{t('home:home:we')} <br/> {t('home:home:optimise')}</h2>
            </div>
        </div>
    </div>
  )
}

export default BannerWord