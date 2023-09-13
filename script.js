        const passwordLength = document.getElementById('passwordLength');
        const UppercaseCheckbox = document.getElementById('includeUppercase');
        const LowercaseCheckbox = document.getElementById('includeLowercase');
        const NumbersCheckbox = document.getElementById('includeNumbers');
        const SpecialCharsCheckbox = document.getElementById('includeSpecialChars');
        const generateButton = document.getElementById('generatePassword');
        const passwordResult = document.getElementById('passwordResult');

        
        
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const number = '0123456789';
        const special = '!@#$%^&*()-_+=<>?.,"';

        function generatePassword() {
            const length = parseInt(passwordLength.value);
            let passSet = '';
            
            if (UppercaseCheckbox.checked) {
                passSet += upperCase;
            }
            if (LowercaseCheckbox.checked) {
                passSet += lowerCase;
            }
            if (NumbersCheckbox.checked) {
                passSet += number;
            }
            if (SpecialCharsCheckbox.checked) {
                passSet += special;
            }
            let password = '';
            for (let i = 0; i < length; i++) {
                const random = Math.floor(Math.random() * passSet.length);
                password += passSet.charAt(random);
            }

            return password;
        }

        generateButton.addEventListener('click', () => {
            const password = generatePassword();
            passwordResult.innerHTML = "Generated Password:" + password;
        });

        generateButton.click();