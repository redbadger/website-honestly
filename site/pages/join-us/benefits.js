import financeIcon from './images/Finance_icon.png';
import healthIcon from './images/Health_icon.png';
import socialIcon from './images/Social_icon.png';
import workLifeIcon from './images/Worklifebalance_icon.png';
import careerIcon from './images/Career_icon.png';

const benefitsCategories = [
  {
    name: 'Health',
    icon: healthIcon,
    benefits: [
      {
        mobileView: false,
        question: 'How does Red Badger support me if I’m unwell?',
        answer:
          'As well as enhanced sick pay, we also offer private medical cover provided by Vitality.',
      },
      {
        mobileView: false,
        question: 'What is covered to keep me healthy?',
        answer:
          'We have a cycle to work scheme, which offers a loan of up to £1,000 to lease you a bike and accessories. Our HQ office also has great bike storage and shower facilities. We have ad-hoc yoga and other classes and there’s always a supply of free fruit in our kitchens.',
      },
      {
        mobileView: false,
        question: 'In the worst-case scenario, how do Red Badger support me and my family?',
        answer:
          'We’ve got several benefits designed to help you through difficult times. These include confidential legal advice and counselling through our Employee Assistance Programme, our death in service cover, permanent health insurance and critical illness cover.',
      },
    ],
  },
  {
    name: 'Finance',
    icon: financeIcon,
    benefits: [
      {
        mobileView: false,
        question: 'What pension contributions will I receive?',
        answer:
          'From day one you’ll be auto-enrolled on our pension scheme and on passing probation you’ll be able to opt-in to our enhanced scheme, which offers an employer contribution of 5% of your salary.',
      },
      {
        mobileView: false,
        question: 'Do you offer assistance with the cost of commuting?',
        answer:
          'Yes, you can take out an interest-free loan to help with the cost of travel to and from work.',
      },
      {
        mobileView: false,
        question: 'Is there a bonus scheme?',
        answer:
          'While we don’t believe in performance-related bonuses, we do have a generous referral bonus scheme.',
      },
    ],
  },
  {
    name: 'Work-life balance',
    icon: workLifeIcon,
    benefits: [
      {
        mobileView: false,
        question: 'How much holiday will I get?',
        answer:
          'In addition to bank holidays, we offer 24 holidays per year, which incrementally increases to 28 days after six years service.',
      },
      {
        mobileView: false,
        question: 'What’s your parental leave policy?',
        answer:
          'Starting at 26 weeks and depending on your length of service, you’ll be eligible for either our enhanced - 12 weeks full pay - or our enhanced plus - 16 weeks full pay - maternity or shared parental leave. New fathers can also take enhanced paternity leave in addition to shared parental leave.',
      },
      {
        mobileView: false,
        question: 'Do you have any wellbeing programmes?',
        answer:
          'Once a month a masseuse comes into the office to give at-desk massages. We also have several wellbeing programmes and talks throughout the year.',
      },
    ],
  },
  {
    name: 'Community and culture',
    icon: socialIcon,
    benefits: [
      {
        mobileView: false,
        question: 'What socials can I get involved in?',
        answer:
          'When you join, check out our social calendar to see what’s going on - from dodgeball to pub quizzes to ring making to diversity lunches, you are invited to take part in as much or as little as you would like. And don’t forget our two annual parties!',
      },
      {
        mobileView: false,
        question: 'Can I donate to charity through the payroll?',
        answer:
          'Yes, you can join our Give As You Earn scheme to make tax-free charity donations, Red Badger will also match your donation!',
      },
      {
        mobileView: false,
        question: 'I’m interested in the Red Badger culture, can I get involved?',
        answer:
          'We’re proud of our culture and we want to consciously grow it as the business expands, join our monthly Culture Committee to help shape our culture conversations.',
      },
      {
        mobileView: false,
        question: 'Does Red Badger work with any charities?',
        answer:
          'We pride ourself on our charity partnerships and we encourage Badgers to get involved in our charity initiatives by joining our Social Value taskforce.',
      },
    ],
  },
  {
    name: 'Career development',
    icon: careerIcon,
    benefits: [
      {
        mobileView: false,
        question: 'How can I develop at Red Badger?',
        answer:
          'Each year you’ll receive a training budget of £2,000 to spend on your professional development. You’ll also be invited to attend various in-house training events and lunch n learns.',
      },
      {
        mobileView: false,
        question: 'Do you have a library?',
        answer:
          'Our HQ office has a well-stocked library, which you are welcome to borrow from or add to. We’ll buy the books on the condition that you share them with everyone!',
      },
      {
        mobileView: false,
        question: 'How will I be supported to develop?',
        answer:
          'You’ll be able to discuss your career development goals with your manager, who will help give you opportunities and support to achieve these.',
      },
    ],
  },
];

export default benefitsCategories;
