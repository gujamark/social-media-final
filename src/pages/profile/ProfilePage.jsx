import { Panel } from 'rsuite';
import ProfileEditForm from '../../components/forms/profile-edit/ProfileEditForm';
import styles from './ProfilePage.module.css';
import { AuthProtected } from '../../hocs';

function ProfilePage() {
  return (
    <div className={styles.ProfilePanelWrapper}>
      <Panel
        header="Guja Markozashvili"
        className={styles.ProfilePanel}
        bordered>
        <ProfileEditForm />
      </Panel>
    </div>
  );
}

export default AuthProtected(ProfilePage);
