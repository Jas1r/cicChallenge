import {
  Header,
  SkipToContent,
  HeaderName,
} from 'carbon-components-react';

export default function CarbonHeader() {
  return (
    <Header aria-label="IBM Coding Challenge Show-case">
      <SkipToContent />
      <HeaderName href="#" prefix="IBM Coding Challenge" children={''} />
    </Header>
  );
}
