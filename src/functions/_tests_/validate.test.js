import { validateAge, validateEmail, validateName, validateSelect } from '../validate';


describe('validate email', () => {

    test('validate email to equal false if wrong email', () => {
        expect(validateEmail('some@mistyped,email')).toEqual(false)
    })


    test('validate email is true if right email', () => {
        expect(validateEmail('this.seems@toberightemail.com')).toEqual(true)

    })


})

describe('validate name',()=> {

    test('valid name Tim Burton to be true',() => {
        expect(validateName('Tim Burton')).toEqual(true);
    })

    test('wrong name 33edgard to be false',()=> {
        expect(validateName('33edgard')).toEqual(false);
    })

    test('wrong name Тим Бертон to be false',()=> {
        expect(validateName('Тим Бертон')).toEqual(false);
    })
})

describe('validate select',()=> {

    test('return false if empty string',()=> {
        expect(validateSelect('')).toEqual(false);
    })

    test('return true if option is selected',()=> {
        expect(validateSelect('something')).toEqual(true);

    })

})

describe('validate age',()=> {
    let currentTime = [2021,5,29];

    test('return false if year difference is smaller than 18',()=> {
        expect(validateAge('2010-5-11',currentTime)).toEqual(false);
    })

    test('return false if year difference is 18 but month is bigger',()=> {
        expect(validateAge('2003-6-11',currentTime)).toEqual(false);
    })

    test('return false if year and month are valid but amount of days is smaller',()=> {
        expect(validateAge('2003-5-30',currentTime)).toEqual(false);
    })
})