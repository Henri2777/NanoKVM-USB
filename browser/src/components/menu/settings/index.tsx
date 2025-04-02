import { Popover } from 'antd';
import { BookIcon, DownloadIcon, SettingsIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Language } from './language.tsx';

export const Settings = () => {
  const { t } = useTranslation();

  function openPage(url: string) {
    window.open(url, '_blank');
  }

  const content = (
    <div className="flex flex-col space-y-1">
      <Language />

      <div
        className="flex h-[30px] cursor-pointer items-center space-x-2 rounded px-3 text-neutral-300 hover:bg-neutral-700"
        onClick={() => openPage('https://wiki.sipeed.com/nanokvmusb')}
      >
        <BookIcon size={18} />
        <span>{t('settings.document')}</span>
      </div>

      <div
        className="flex h-[30px] cursor-pointer items-center space-x-2 rounded px-3 text-neutral-300 hover:bg-neutral-700"
        onClick={() => openPage('https://github.com/sipeed/NanoKVM-USB/releases')}
      >
        <DownloadIcon size={18} />
        <span>{t('settings.download')}</span>
      </div>
    </div>
  );

  return (
    <Popover content={content} placement="bottomLeft" trigger="click" arrow={false}>
      <div className="flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded text-white hover:bg-neutral-700/70">
        <SettingsIcon size={18} />
      </div>
    </Popover>
  );
};
