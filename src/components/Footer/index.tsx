import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '玄色出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '用户中心1',
          href: 'https://www.yuque.com/dashboard/books',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '管理平台11',
          href: 'https://www.yuque.com/dashboard/books',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> GitHub</>,
          href: 'https://github.com/Riaduhb',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
