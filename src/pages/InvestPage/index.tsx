import { RICAddress } from 'constants/polygon_config';
import { HeaderContainer } from 'containers/main/HeaderContainer';
import { InvestContainer } from 'containers/main/InvestContainer';
import { MainLayout } from 'containers/MainLayout';
import { useShallowSelector } from 'hooks/useShallowSelector';
import React, {
  FC,
} from 'react';
import { selectMain } from 'store/main/selectors';
import styles from './styles.module.scss';

interface IProps {}

const InvestPage: FC<IProps> = () => {
  const {
    address,
    balances,
    isReadOnly,
  } = useShallowSelector(selectMain);
  return (
    <MainLayout>
      <div className={styles.header}>
        <HeaderContainer isReadOnly={isReadOnly} balance={balances && balances[RICAddress]} address={address || 'Connect Wallet'} />
      </div>
      <div className={styles.content}>
        <InvestContainer />
      </div>
    </MainLayout>
  );
};

export { InvestPage };
