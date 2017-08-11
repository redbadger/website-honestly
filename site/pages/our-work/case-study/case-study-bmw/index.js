import GenericCaseStudy from '../../../components/generic-case-study';

type BMWCaseStudyProps = {
  contactUsURL: string,
};

const BMWCaseStudy = ({ contactUsURL }: BMWCaseStudyProps) =>
  <GenericCaseStudy
    title="BMW Virtual Museum: The shortcut between you and the museum"
    headerImage=""
    headerImageAlt="image"
  >
    <p>Hello!</p>
  </GenericCaseStudy>;
