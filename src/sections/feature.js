/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'Email Campaigns',
    text:
      'Build beautiful, shoppable emails using our templates and a drag & drop Content Editor ',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'Marketing Automation',
    text:
      'Save time with pre-built ecommerce automations or utilize our Automation Editor ',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: 'SMS',
    text:
      'Integrate SMS right next to your emails - and we\'ll give you free SMS credits to do so ',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Popups & Forms',
    text:
      'Grow your subscriber lists with responsive popups, landing pages or a wheel-of-fortune',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Productivity',
    title: 'Segmentation',
    text:
      'Target the right contacts using their purchase history, lifecycle stages and more customer data ',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Reports',
    text:
      'Track sales and learn what’s working best with our dashboards and reporting tools ',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="revenue-driving email marketing and automations"
          title="Drive sales impact with Moderna"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
