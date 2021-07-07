import { Panel } from 'rsuite';
import styles from './ProfilePage.module.css';
import RegisterForm from '../../components/forms/register';

function ProfilePage() {
  return (
    <div className={styles.ProfilePanelWrapper}>
      <Panel
        header="Guja Markozashvili"
        className={styles.ProfilePanel}
        bordered>
        <RegisterForm />
      </Panel>
    </div>
  );
}
export default ProfilePage;
