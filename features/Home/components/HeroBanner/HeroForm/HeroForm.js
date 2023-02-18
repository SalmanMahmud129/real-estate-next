import { Box, Button, Checkbox, Flex, FormControl, Input, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

function HeroForm() {

    const {register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data) => console.log(data)

  return (
    <Box width='100%' padding='2rem' borderRadius='sm' backgroundColor='white' color='green.700'>
        <Text fontSize='xl' fontWeight='bold'>
            Catalog
        </Text>
        <Text fontSize='lg'> Complete form to download our newest catalog</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                {/* the register in brackets is essentially creating the formdata object with a key of name and the value will be gathered from the input */}
                <Input marginTop='1.3rem' id='name' type='text' placeHolder='Name' {...register('name', {required: true })}/>
                {/* handle errors */}
                {errors.name && (
                    <Text fontSize='xs' color='red.400'>{errors.name.type}</Text>
                )}


                {/* need more space for email and phone. The flex box will make phone and email side by side instead of vertical when on bigger screens. On mobile it will be vertical/column flexDir*/}
                <Flex gap={{base:"0", sm: "1rem"}} flexDirection={{base: "column", sm: "row"}}>

                <Input marginTop='1.3rem' id='email' type='email' placeHolder='Email' {...register('email', {required: true })}/>
                {errors.email && (
                    <Text fontSize='xs' color='red.400'>{errors.email.type}</Text>
                )}

                <Input marginTop='1.3rem' id='phone' type='text' placeHolder='Phone' {...register('phone', {required: true })}/>
                {errors.phone && (
                    <Text fontSize='xs' color='red.400'>{errors.phone.type}</Text>
                )}

                </Flex>

                <Checkbox marginTop='1.3rem' id='gdpr' type='checkbox' placeholder="GDPR" {...register('gdpr', {required:true})}>I accept terms and services provided by Real Estate NEXT</Checkbox>
                
                {/* handle checkbox errors */}
                {errors.gdpr && (
                    <Text fontSize='xs' color='red.400'>{errors.gdpr.type}</Text>
                )}
            </FormControl>
            <Button type="submit" colorScheme='blue' width='100%' fontSize='xl' padding='2rem' marginTop='2rem'>Download Now</Button>
        </form>

    </Box>
  )
}

export default HeroForm