import { Box, Heading, Text } from "@chakra-ui/layout"
import styled from'@emotion/styled'


const BioSection = styled(Box)`
padding-left: 3.4em;
text-indent:-3.4em
`

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

const Bio = () => {
  

  return(
    <Box marginBottom="36px">
      <Heading as="h3" variant="section-title" fontSize="20px">Bio</Heading>
      <BioSection>
        <BioYear>2002</BioYear>Born in Bacgiang, Vietnam
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>Graduated from hight school in Vietnam
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>Admission to cryptographic engineering academy(Học Viện Kỹ Thuật Mật Mã)
      </BioSection>
      <BioSection>
        <BioYear>2020 to present</BioYear>Freelance and studying at cryptographic engineering academy(Học Viện Kỹ Thuật Mật Mã)
      </BioSection>
    </Box>
  )
}

export default Bio