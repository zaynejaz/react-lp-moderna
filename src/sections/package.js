/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: 'Free ',
    description: 'Best for starting businesses or for exploring Moderna',
    buttonText: 'Start Free',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Reach up to 250 contacts ',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          '500 emails/mo',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Up to 60 SMS ',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: '24/7 Chat and Email support',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Customer Success Manager',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recommended',
    name: 'Pro',
    description: 'Best for High-volume senders',
    priceWithUnit: '$29.99/',
    buttonText: 'Try Free',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Reach up to 50,000 contacts ',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Unlimited emails',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Up to 4,000 SMS/mo',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '24/7 Priority Support',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Customer Success Manager',
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Start free, upgrade as you grow"
          slogan="Plans and features"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
