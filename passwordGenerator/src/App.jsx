import { useRef } from "react";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0); // default length
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 1; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str[charIndex];
    }

    setPassword(pass);
  }, [length, characterAllowed, numberAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    passwordRef.current.select();
    // passwordRef.current.focus();
  };

  const handleCloseToast = () => {
    setCopied(false);
  }

  return (
    <div className="relative">
       {copied && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg flex items-center justify-between min-w-[250px] z-50">
          <span>Password copied to clipboard!</span>
          <button
            onClick={handleCloseToast}
            className="ml-4 text-white hover:text-red-300 text-xl font-bold focus:outline-none"
          >
            &times;
          </button>
        </div>
      )}

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="bg-red-400 text-white text-center my-3 text-lg font-semibold rounded">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-2 py-2 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`outline-none px-3 py-2 text-white transition-all duration-200 ${
              copied ? "bg-green-600" : "bg-blue-700"
            }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex items-center gap-x-2 mb-2">
          <input
            className="cursor-pointer w-full"
            type="range"
            min={5}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2 mb-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="number">Include Numbers</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={characterAllowed}
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="charInput">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
