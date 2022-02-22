/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Can I send MMS?',
    contents: (
      <div>
        Yes, MMS is available so you can insert images or gifs into your text messages. MMS is available for US & Canada recipients only, while SMS (text-only messages) are available globally. 
      </div>
    ),
  },
  {
    title: 'Will the Free Plan give me access to all the feature of the paid plan?',
    contents: (
      <div>
        While on a Free plan, you can explore all the features of our paid plan, as well as a variety of channels, including SMS, push notifications, Google Customer Match, and Facebook Custom Audiences. The only limitation on a Free plan is that you can send a maximum of 500 emails/month to up to 250 contacts. 
      </div>
    ),
  },
  {
    title: `How can I pay?`,
    contents: (
      <div>
        We accept VISA (credit, debit, prepaid), MasterCard (credit, debit, prepaid), and American Express (credit, prepaid) card payments. Discover, Diners Club, JCB, UnionPay cards are not supported. 
      </div>
    ),
  },
  {
    title: `I have more questions. How can I reach you?`,
    contents: (
      <div>
       Simply send us an email at support@moderna.com. We’re checking it 24/7 and we’ll be happy to answer any of your questions. 
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently Asked Questions"
          slogan="What would you like to know"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
