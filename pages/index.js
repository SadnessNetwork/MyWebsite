/* eslint-disable @next/next/no-img-element */
import {EmailIcon} from '@chakra-ui/icons'
import {
    Box,
    Button,
    chakra,
    Container,
    Heading,
    Link,
    List,
    ListItem,
    useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import {FaTelegram, FaTelegramPlane} from 'react-icons/fa'
import {IoLogoGithub} from 'react-icons/io5'
import {BioSection} from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import config from "../config/config";

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

/** @returns {Promise<import("./types").IDiscordUser|null>} */
const GetDiscordUser = async () => {
    const res = await fetch(`https://discord.com/api/users/${config.USER_ID}`)
    if (res.status !== 200 || !res) return null
    return await res.json()
}

const GetCDNDiscordAvatar = async () => {
    const user = await GetDiscordUser()
    if (!user) return null
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar.startsWith('a_') ? `${user.avatar}.gif` : `${user.avatar}.png`}}`
}

const Home = () => (
    <Layout>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{backdropFilter: 'blur(10px)'}}
            >
                hello, i&apos;m Nazar, backend developer
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Sadness
                    </Heading>
                    <p>backend developer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src={`${GetCDNDiscordAvatar()}`}
                            alt="profile image"
                            borderRadius="full"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    who_am_i
                </Heading>
                <Paragraph>
                    If you’re wondering about my knowledge and tech stack, well, you have
                    it. Rust, Node.js, JavaScript, TypeScript. But that’s not where it
                    ends — I’ve also dabbled in Python, C++, Java and others, just to keep
                    things interesting. My days are filled with lines of code, debugging
                    sessions, and the exhilarating satisfaction of solving problems and of
                    course learning and exploring more and more.
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    tech stack these days:
                </Heading>
                <BioSection>
                    <p style={{textAlign: 'center'}}>
                        <a href="https://skillicons.dev">
                            <img
                                style={{
                                    textAlign: 'center',
                                    marginTop: '10%'
                                }}
                                src="https://skillicons.dev/icons?i=rust,ts,nodejs,js,bash,py,cpp,linux,git,github,githubactions,html,css,sass,react,nextjs,nestjs,mongodb,aws,cloudflare,postman&perline=7"
                                alt="tech stack"
                            />
                        </a>
                    </p>
                </BioSection>
            </Section>

            {/* <Section delay={0.3}>
        <BioSection style={{ marginBottom: '10px' }}>
          <p style={{ textAlign: 'center' }}>
            <a href="https://github.com/ryo-ma/github-profile-trophy">
              <img
                style={{ width: '80%' }}
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=SadnessNetwork&hide_border=false&theme=radical&layout=compact&hide_progress=false&hide=jupyter%20notebook&langs_count=10"
                alt="most used langs"
              />
            </a>
          </p>
        </BioSection>
      </Section> */}

            <Section delay={0.3}>
                {/*<Heading as="h3" variant="section-title">*/}
                {/*    <svg*/}
                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                {/*        width="40"*/}
                {/*        height="40"*/}
                {/*        fill="currentColor"*/}
                {/*        class="bi bi-heart"*/}
                {/*        viewBox="0 0 16 16"*/}
                {/*    >*/}
                {/*        <path*/}
                {/*            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>*/}
                {/*    </svg>*/}
                {/*</Heading>*/}
                <Paragraph style={{textAlign: 'center'}}>
                    <Link href="https://github.com/SadnessNetwork" target="_blank">
                        coding, programming
                    </Link>
                    ,{'  '}
                    <Link href="https://www.anilibria.tv/" target="_blank">
                        anime
                    </Link>
                    , knowledge
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    socials:
                </Heading>
                <List style={{textAlign: 'center'}}>
                    <ListItem style={{paddingBottom: '1%'}}>
                        <Link href="https://github.com/SadnessNetwork" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub/>}
                            >
                                @Sadness
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem style={{paddingBottom: '1%'}}>
                        <Link href="https://t.me/zaryanetwork" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<FaTelegram/>}
                            >
                                @Sadness
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem style={{paddingBottom: '1%'}}>
                        <Link href="mailto:work@sadness.website" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<EmailIcon/>}
                            >
                                work@sadness.website
                            </Button>
                        </Link>
                    </ListItem>
                </List>

                <Heading as="h3" variant="section-title">
                    <p>let&apos;s work !</p>
                </Heading>

                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="https://t.me/zaryanetwork"
                        scroll={false}
                        leftIcon={<FaTelegramPlane/>}
                        colorScheme="teal"
                    >
                        contact me
                    </Button>
                </Box>
            </Section>
        </Container>
    </Layout>
)

export default Home
export {getServerSideProps} from '../components/chakra'
