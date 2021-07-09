import { Panel } from 'rsuite';
import ProfileEditForm from '../../components/forms/profile-edit/ProfileEditForm';
import styles from './ProfilePage.module.css';
import { AuthProtected } from '../../hocs';

function ProfilePage() {
  return (
    <div className={styles.ProfilePanelWrapper}>
      <Panel className={styles.ProfilePanel} bordered>
        <ProfileEditForm />
      </Panel>
    </div>
  );
}

export default AuthProtected(ProfilePage);
