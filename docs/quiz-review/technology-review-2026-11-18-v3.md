# CURIO — technology — review draft

Status: review copy of current local-site content; independent editorial review is ongoing. Date: 18 November 2026.

7 quizzes × 15 questions = 105 questions. Each quiz has five Easy, five Medium and five Hard questions. Questions are in the site’s existing English language. Options and answer letters use the same deterministic preparation as the site build.

## Instructions for the reviewer

Review every question independently. Flag factual errors, disputed or time-sensitive claims, multiple defensible answers, weak distractors, inaccurate explanations and difficulty mismatches. Pay particular attention to answer-length clues, grammatical clues, implausible distractors, absolute wording and answer-position patterns. Do not assume the marked answer is correct. Return feedback using quiz slug and question number, explain each problem, cite reliable sources for factual corrections, and suggest corrected text for all four options when needed.

## Programming Concepts

Quiz ID: `programming-concepts`

### 01 · Easy

What is a variable in a program?

**A.** A named reference to a value

**B.** A physical processor manufacturing process

**C.** A complete copy of the operating system

**D.** A mandatory external network connection

**Marked answer: A. A named reference to a value**

**Explanation:** Variables let programs refer to values that may change or be bound differently during execution.

---

### 02 · Easy

What does a loop allow a program to do?

**A.** Repeat a set of operations

**B.** Choose one conditional branch

**C.** Define an input for a function

**D.** Store a value for later use

**Marked answer: A. Repeat a set of operations**

**Explanation:** Loops express repeated execution subject to a count or condition.

---

### 03 · Easy

What is a function's parameter?

**A.** The file extension of its source code

**B.** The value printed by every program

**C.** An input named in its definition

**D.** The amount of memory installed in a computer

**Marked answer: C. An input named in its definition**

**Explanation:** Parameters describe inputs accepted by a function; arguments are values supplied when it is called.

---

### 04 · Easy

What is a Boolean value?

**A.** A fractional numeric value

**B.** A signed whole number

**C.** True or false

**D.** An ordered sequence of characters

**Marked answer: C. True or false**

**Explanation:** Boolean logic uses two truth values, often represented as true and false.

---

### 05 · Easy

What is an algorithm?

**A.** A particular manufacturer's processor model

**B.** The graphical appearance of an application

**C.** The physical cable used by a network

**D.** A defined procedure for solving a problem

**Marked answer: D. A defined procedure for solving a problem**

**Explanation:** An algorithm specifies a sequence or structure of steps for carrying out a task.

---

### 06 · Medium

What usually distinguishes a list from a set in abstract data structures?

**A.** A list removes duplicates; a set retains repeated members

**B.** A list is unordered; a set assigns numeric indexes

**C.** A list has positions; a set has unique members

**D.** A list enforces uniqueness; a set defines positions

**Marked answer: C. A list has positions; a set has unique members**

**Explanation:** Lists are ordered sequences, while mathematical sets do not retain duplicate members; language implementations may add ordering behavior.

---

### 07 · Medium

What is a base case in recursion?

**A.** A condition that stops further recursive calls

**B.** The original call before the first recursive call

**C.** The expression that creates the next recursive call

**D.** The rule combining results from recursive subproblems

**Marked answer: A. A condition that stops further recursive calls**

**Explanation:** A terminating case prevents recursion from continuing indefinitely when the recursive process reaches it.

---

### 08 · Medium

What does a unit test aim to check?

**A.** The interaction between integrated program modules

**B.** The complete application under a high request load

**C.** The product's acceptance by its intended users

**D.** A small, focused behavior of a program

**Marked answer: D. A small, focused behavior of a program**

**Explanation:** Unit tests check limited behaviors in isolation or with controlled dependencies; they do not prove complete correctness.

---

### 09 · Medium

Which design lets a calculation be tested without reading a file?

**A.** Pass parsed values into a calculation function

**B.** Print the result instead of returning any value

**C.** Store the file path in a shared global variable

**D.** Open and parse the file inside that calculation

**Marked answer: A. Pass parsed values into a calculation function**

**Explanation:** Separating parsing from calculation allows controlled values to be supplied directly during a test.

---

### 10 · Medium

For a sorted array, what does binary search repeatedly do?

**A.** Discard roughly half the remaining search interval

**B.** Compare the target with every element in order

**C.** Sort the whole array after each comparison

**D.** Build a new array containing every duplicate value

**Marked answer: A. Discard roughly half the remaining search interval**

**Explanation:** Binary search uses order to narrow the interval, giving logarithmic comparison growth under its standard assumptions.

---

### 11 · Hard

Starting with x = 1, a loop repeatedly doubles x while x < 20. What is x immediately after the loop ends?

**A.** 16

**B.** 20

**C.** 32

**D.** 64

**Marked answer: C. 32**

**Explanation:** The successive values are 1, 2, 4, 8, 16 and 32; the loop stops when the condition x < 20 becomes false.

---

### 12 · Hard

Why can caching a function's results be incorrect if the function depends on changing external state?

**A.** A cache changes the function's external dependencies into local variables

**B.** Identical arguments may produce different results later

**C.** Every cached value is checked against its source before reuse

**D.** The argument-based key automatically captures all external dependencies

**Marked answer: B. Identical arguments may produce different results later**

**Explanation:** Memoization needs keys or invalidation rules that account for relevant dependencies.

---

### 13 · Hard

For each i from 1 through n, an inner loop runs i times. What is the exact number of inner-body executions?

**A.** n(n − 1)/2

**B.** n²

**C.** 2n

**D.** n(n + 1)/2

**Marked answer: D. n(n + 1)/2**

**Explanation:** The count is 1 + 2 + … + n = n(n + 1)/2; its asymptotic growth is quadratic even though the inner bound changes.

---

### 14 · Hard

A copied object shares a nested list with the original. What kind of copying most likely occurred?

**A.** An immutable copy

**B.** A deep copy

**C.** A serialized copy

**D.** A shallow copy

**Marked answer: D. A shallow copy**

**Explanation:** A shallow copy duplicates the outer container while retaining references to nested objects.

---

### 15 · Hard

Why can two threads each performing 'read, add one, write' lose an increment?

**A.** Writing the new value merges updates from competing threads

**B.** Their read-modify-write sequences can interleave

**C.** Reading a shared value automatically acquires mutual exclusion

**D.** Thread creation implicitly serializes access to the shared value

**Marked answer: B. Their read-modify-write sequences can interleave**

**Explanation:** Without suitable synchronization or atomic operations, both threads can read the same old value and overwrite one another's updates.

---

## Internet & Networks

Quiz ID: `internet-networks`

### 01 · Easy

What is DNS commonly used to do?

**A.** Compress video for a slower connection

**B.** Assign keyboard shortcuts inside a browser

**C.** Resolve domain names to network information

**D.** Encrypt the contents of every website

**Marked answer: C. Resolve domain names to network information**

**Explanation:** DNS maps names to records, including addresses used to locate internet services.

---

### 02 · Easy

What is an IP address used for in networking?

**A.** Recording a browser's entire search history

**B.** Identifying an interface for packet delivery

**C.** Specifying a webpage's font family

**D.** Measuring the age of a server's processor

**Marked answer: B. Identifying an interface for packet delivery**

**Explanation:** IP addresses support addressing and routing at the network layer.

---

### 03 · Easy

What is a router's basic role?

**A.** Display the contents of HTML pages

**B.** Forward packets between networks

**C.** Create a new password for every user

**D.** Convert source code into machine instructions

**Marked answer: B. Forward packets between networks**

**Explanation:** Routers use network information to direct packets toward their destinations.

---

### 04 · Easy

What does HTTPS add to ordinary HTTP communication?

**A.** A guarantee of honest site ownership

**B.** Protection from every browser exploit

**C.** Automatic encryption of stored server files

**D.** Transport protection using TLS

**Marked answer: D. Transport protection using TLS**

**Explanation:** HTTPS protects data in transit through TLS but does not by itself establish that a site's content or owner is trustworthy.

---

### 05 · Easy

What does bandwidth describe in a common networking context?

**A.** The time taken for one packet to make a round trip

**B.** The number of pixels displayed by a monitor

**C.** The physical mass of a network cable

**D.** The capacity of a communication link

**Marked answer: D. The capacity of a communication link**

**Explanation:** Bandwidth concerns capacity; latency concerns delay, and actual throughput can be lower than capacity.

---

### 06 · Medium

Why can a high-bandwidth connection still feel slow for interactive tasks?

**A.** Throughput must fall as capacity rises

**B.** Bandwidth measures response delay directly

**C.** Round-trip latency can remain high

**D.** Link capacity eliminates server delay

**Marked answer: C. Round-trip latency can remain high**

**Explanation:** Latency affects how quickly responses return even when large data transfers are possible.

---

### 07 · Medium

Which service does TCP normally provide to an application?

**A.** A reliable, boundary-preserving message service

**B.** A permanently fixed packet routing path

**C.** An ordered, reliable byte stream

**D.** A fixed-delay datagram delivery service

**Marked answer: C. An ordered, reliable byte stream**

**Explanation:** TCP handles ordering and retransmission at its transport layer; applications still need to manage their own semantics and failures.

---

### 08 · Medium

What distinguishes a private LAN address from a public internet address?

**A.** Its assigned host is guaranteed to use a permanent address

**B.** Its intended scope is within private networks

**C.** Its numeric value proves that the traffic is encrypted

**D.** Its scope is determined by the web browser's display settings

**Marked answer: B. Its intended scope is within private networks**

**Explanation:** Private address ranges are reserved for internal use and are not globally routed as ordinary public addresses.

---

### 09 · Medium

Why do content delivery networks place caches in multiple regions?

**A.** To replace the need for DNS lookups

**B.** To centralize every content computation

**C.** To serve content nearer to users

**D.** To remove cache expiry requirements

**Marked answer: C. To serve content nearer to users**

**Explanation:** Nearby caches can reduce latency and distribute load, while cache policy and origin behavior still matter.

---

### 10 · Medium

What does a port number help identify?

**A.** The host's network-layer routing prefix

**B.** The interface's physical link-layer address

**C.** A transport-layer endpoint or service

**D.** The DNS zone's authoritative name-server record

**Marked answer: C. A transport-layer endpoint or service**

**Explanation:** Transport protocols use ports to distinguish communication endpoints on a host.

---

### 11 · Hard

Why does successful DNS resolution not prove a website is reachable?

**A.** A resolved name establishes an open application port

**B.** DNS completes the application transaction on lookup

**C.** An address lookup supplies a trusted server certificate

**D.** Routing, server or transport failures can remain

**Marked answer: D. Routing, server or transport failures can remain**

**Explanation:** Finding an address is one stage; reaching the service and obtaining a response require further successful steps.

---

### 12 · Hard

What can cause packets from one communication to arrive out of order?

**A.** A MAC address encodes application message order

**B.** A DNS label sets packet priority along the route

**C.** Transport ports assign every packet a new network

**D.** Different routes or variable network delays

**Marked answer: D. Different routes or variable network delays**

**Explanation:** Packet networks can introduce different delays; protocols such as TCP can reorder data before delivering it to applications.

---

### 13 · Hard

Why might increasing bandwidth not speed up a request dominated by a slow database query?

**A.** Server processing remains the bottleneck

**B.** Link capacity determines query CPU time

**C.** More bandwidth reduces the query's data size

**D.** Client bandwidth fixes the rows examined

**Marked answer: A. Server processing remains the bottleneck**

**Explanation:** End-to-end performance is limited by the stage consuming the most relevant time or capacity.

---

### 14 · Hard

Why does UDP's lack of built-in retransmission sometimes suit real-time applications?

**A.** UDP compresses media before network transmission

**B.** UDP supplies an ordered stream with retransmission

**C.** Late data may be less useful than current data

**D.** UDP waits for missing datagrams before delivery

**Marked answer: C. Late data may be less useful than current data**

**Explanation:** Applications can choose how to handle loss and delay rather than inheriting TCP's ordered-stream behavior.

---

### 15 · Hard

What distinguishes authentication of a server certificate from DNS resolution?

**A.** Rendering HTML versus selecting a transport-layer port number

**B.** Assigning an IP address versus translating a private network address

**C.** Selecting the fastest route versus measuring the packet payload

**D.** Verifying a claimed server identity versus locating records

**Marked answer: D. Verifying a claimed server identity versus locating records**

**Explanation:** DNS supplies records; certificate validation helps verify identity within the TLS trust model.

---

## Cybersecurity Basics

Quiz ID: `cybersecurity-basics`

### 01 · Easy

What is phishing?

**A.** A test of how quickly a hard drive can read data

**B.** Deception aimed at obtaining information or actions

**C.** A method for reducing a video's file size

**D.** A process for assigning local printer addresses

**Marked answer: B. Deception aimed at obtaining information or actions**

**Explanation:** Phishing uses deceptive messages or sites to induce disclosures or harmful actions.

---

### 02 · Easy

Which is an example of a second authentication factor beyond a password?

**A.** Another security-question answer

**B.** A second memorized PIN

**C.** An extra password phrase

**D.** A physical security key

**Marked answer: D. A physical security key**

**Explanation:** A security key supplies possession-based evidence, distinct from another knowledge-based secret.

---

### 03 · Easy

What does encryption primarily protect when properly used?

**A.** Data confidentiality

**B.** Service availability

**C.** Data integrity

**D.** Message authenticity

**Marked answer: A. Data confidentiality**

**Explanation:** Encryption limits intelligibility without the key; integrity and authenticity require suitable additional properties or modes.

---

### 04 · Easy

What is a backup?

**A.** A pointer to an original file

**B.** A recoverable copy of data

**C.** A live synchronization setting

**D.** A file-deletion confirmation

**Marked answer: B. A recoverable copy of data**

**Explanation:** A useful backup supports restoration and must be protected and tested appropriately.

---

### 05 · Easy

Why should software updates be applied when they fix security flaws?

**A.** They can remove known vulnerabilities

**B.** They guarantee that the device will never be attacked

**C.** They turn public data into secret information automatically

**D.** They replace the need for any account permissions

**Marked answer: A. They can remove known vulnerabilities**

**Explanation:** Security updates address particular flaws, while other protective measures remain necessary.

---

### 06 · Medium

Why is a unique password for each service useful?

**A.** Uniqueness prevents deceptive sign-in pages

**B.** A unique secret replaces possession-based factors

**C.** Uniqueness makes a short password resist guessing

**D.** One breach is less likely to expose other accounts

**Marked answer: D. One breach is less likely to expose other accounts**

**Explanation:** Reused credentials let one compromise spread through credential-stuffing attempts.

---

### 07 · Medium

What is the principle of least privilege?

**A.** Granting broad access mainly on personal trust

**B.** Assigning identical record access to every signed-in user

**C.** Retaining former-role permissions for possible future use

**D.** Granting only the access needed for a task

**Marked answer: D. Granting only the access needed for a task**

**Explanation:** Access should be limited to relevant duties and reviewed as those duties change.

---

### 08 · Medium

Why is hashing a password different from encrypting it for later recovery?

**A.** A secure password hash is intended for verification, not reversal

**B.** A hash validates a password by storing each character in a separate field

**C.** A password hash is encryption with a publicly stored decryption key

**D.** Encryption and hashing both require recovering the original during login

**Marked answer: A. A secure password hash is intended for verification, not reversal**

**Explanation:** Password hashing uses appropriate slow schemes and salts; guessing attacks still need consideration.

---

### 09 · Medium

What is a password salt used to do?

**A.** Make stored hashes differ across otherwise identical passwords

**B.** Serving as a hidden decryption key for the original password

**C.** Replacing the slow work factor in a password-hashing scheme

**D.** Storing a reversible copy of the user's authentication secret

**Marked answer: A. Make stored hashes differ across otherwise identical passwords**

**Explanation:** Unique salts reduce the usefulness of precomputed tables and cross-account hash matching.

---

### 10 · Medium

Why can a fraudulent website use an HTTPS connection with a valid certificate?

**A.** Encrypted transport establishes the accuracy of page content

**B.** TLS prevents the site operator reading submitted form data

**C.** Certificate issuance verifies the seller's advertised products

**D.** Transport encryption does not establish business honesty

**Marked answer: D. Transport encryption does not establish business honesty**

**Explanation:** HTTPS protects the connection and authenticates the endpoint within its certificate model; it does not certify the operator's honesty.

---

### 11 · Hard

Why is a single-use, expiring recovery link safer than a permanent reusable link?

**A.** An expiring token prevents its URL from being copied before use

**B.** Its usefulness is constrained after use or time passes

**C.** One-time use encrypts the email channel carrying the recovery message

**D.** Expiry establishes that the person opening the link owns the account

**Marked answer: B. Its usefulness is constrained after use or time passes**

**Explanation:** Expiry and one-time use limit exposure, but links must still be protected and recovery flows carefully designed.

---

### 12 · Hard

What flaw allows a user to access another person's record by changing an identifier?

**A.** SQL command injection

**B.** Broken object-level authorization

**C.** Credential-stuffing attacks

**D.** Cross-site request forgery

**Marked answer: B. Broken object-level authorization**

**Explanation:** The server must authorize access to each object, not merely check that a request has a familiar identifier.

---

### 13 · Hard

Why can deleting an account fail to invalidate an already-issued signed access token immediately?

**A.** Signature verification queries current deletion state

**B.** Deleting an account erases every copy of its issued token

**C.** Token validation may not check current session state

**D.** Deletion changes the token's signed expiration immediately

**Marked answer: C. Token validation may not check current session state**

**Explanation:** Stateless token verification can remain valid until expiry unless the system checks revocation or session state.

---

### 14 · Hard

What does parameterized SQL chiefly help prevent?

**A.** User input changing SQL command structure

**B.** User input running as JavaScript in a web page

**C.** An attacker guessing an unsalted password hash

**D.** An attacker reading an unencrypted network packet

**Marked answer: A. User input changing SQL command structure**

**Explanation:** Parameters separate supplied values from SQL syntax when used correctly; they do not replace transport protection, password hashing or output handling.

---

### 15 · Hard

Why is an untested backup a weak recovery guarantee?

**A.** Current replication replaces historical recovery

**B.** A copy log establishes successful restoration

**C.** It may be incomplete, corrupt or inaccessible

**D.** Its presence proves application recoverability

**Marked answer: C. It may be incomplete, corrupt or inaccessible**

**Explanation:** Restoration testing checks whether the retained data and recovery process actually support recovery.

---

## Artificial Intelligence

Quiz ID: `artificial-intelligence`

### 01 · Easy

What is supervised learning trained with?

**A.** A list of tasks without any available observations

**B.** Examples paired with target outputs

**C.** Examples that have no measurable attributes

**D.** A processor with no stored parameters

**Marked answer: B. Examples paired with target outputs**

**Explanation:** Supervised learning uses input-target examples to learn a predictive relationship.

---

### 02 · Easy

What does a model's training data provide?

**A.** A replacement for the program used to run the model

**B.** A complete explanation of every internal decision

**C.** A guarantee of correct answers to future questions

**D.** Examples from which patterns can be learned

**Marked answer: D. Examples from which patterns can be learned**

**Explanation:** Training data shapes learned patterns but does not guarantee generalization or explain every decision.

---

### 03 · Easy

What is classification in machine learning?

**A.** Assigning inputs to categories

**B.** Learning an action policy from rewards

**C.** Predicting a continuous numerical value

**D.** Finding unlabeled groups of similar inputs

**Marked answer: A. Assigning inputs to categories**

**Explanation:** Classification predicts categories, whereas regression commonly predicts numerical quantities.

---

### 04 · Easy

An AI labels an image as a cat with a confidence score of 0.9. What does this number directly report?

**A.** The image's storage quality

**B.** The number of training images

**C.** The cat's measured age

**D.** The model's assigned score

**Marked answer: D. The model's assigned score**

**Explanation:** A confidence score is output by the model; treating it as a reliable real-world probability requires checking calibration.

---

### 05 · Easy

What is a generative model designed to do?

**A.** Guarantee factual truth for every generated sentence

**B.** Determine legal ownership of every training example

**C.** Produce outputs resembling learned data patterns

**D.** Display only exact copies of its source-code instructions

**Marked answer: C. Produce outputs resembling learned data patterns**

**Explanation:** Generative models produce content from learned structure, with reliability depending on the task and system.

---

### 06 · Medium

What is overfitting?

**A.** Having insufficient capacity to fit even the training patterns

**B.** Learning training-specific patterns that generalize poorly

**C.** Reducing the model's sensitivity to accidental training variation

**D.** Evaluating on data kept separate from parameter fitting

**Marked answer: B. Learning training-specific patterns that generalize poorly**

**Explanation:** A model can fit training data closely while failing on new data, including by learning noise or accidental correlations.

---

### 07 · Medium

Why keep a test set separate from training?

**A.** To replace task-specific error analysis with one score

**B.** To estimate performance on unseen examples

**C.** To duplicate convenient examples from the training set

**D.** To tune parameters on the final evaluation answers

**Marked answer: B. To estimate performance on unseen examples**

**Explanation:** Held-out data supports evaluation of generalization when it is used carefully and not repeatedly optimized against.

---

### 08 · Medium

What is data leakage in model evaluation?

**A.** Unavailable target information enters the training or evaluation setup

**B.** A dataset is transferred to an authorized long-term backup service

**C.** A model uses a publicly documented numerical optimization method

**D.** A training algorithm compresses input images before fitting the model

**Marked answer: A. Unavailable target information enters the training or evaluation setup**

**Explanation:** Leakage can create misleading performance by exposing information that would not be available in real use.

---

### 09 · Medium

Why can high overall accuracy hide poor minority-group performance?

**A.** The minority group sets the entire error rate

**B.** The overall score weights every subgroup equally

**C.** Each subgroup inherits the combined accuracy value

**D.** Errors can be concentrated in a small subgroup

**Marked answer: D. Errors can be concentrated in a small subgroup**

**Explanation:** A large group can dominate the combined score, concealing weaker performance on a smaller group.

---

### 10 · Medium

What is distribution shift?

**A.** New data differs meaningfully from training conditions

**B.** Changing the format of an output report without changing its data

**C.** Reusing one training example during several optimization passes

**D.** Moving a dataset between folders while its examples remain unchanged

**Marked answer: A. New data differs meaningfully from training conditions**

**Explanation:** Changes in input patterns or relationships can reduce reliability outside the training distribution.

---

### 11 · Hard

Why might a model predict pneumonia partly from hospital-specific image markers?

**A.** It ran a controlled clinical trial of the marker

**B.** It established a causal effect of the image marker

**C.** It excluded hospital identity from the fitted signals

**D.** It learned a shortcut correlated with the labels

**Marked answer: D. It learned a shortcut correlated with the labels**

**Explanation:** Spurious correlations can support impressive test scores without learning the intended medical signal.

---

### 12 · Hard

Only 1% of cases are positive. A classifier predicts negative for every case. What is its positive-class recall?

**A.** 0%

**B.** 1%

**C.** 50%

**D.** 99%

**Marked answer: A. 0%**

**Explanation:** It identifies none of the actual positive cases, so recall is zero despite 99% accuracy.

---

### 13 · Hard

What does retrieval-augmented generation add to a language-model workflow?

**A.** Relevant retrieved material as additional context

**B.** A constraint preventing contradiction of every source

**C.** A replacement of the model with a static search index

**D.** A proof that retrieved sources are factually complete

**Marked answer: A. Relevant retrieved material as additional context**

**Explanation:** Retrieval can provide evidence or context, but source quality, relevance and faithful use still require evaluation.

---

### 14 · Hard

Why does correlation between an input and an outcome not establish fairness of using it?

**A.** A numerical score makes historical disadvantage irrelevant

**B.** Correlation establishes appropriate use across contexts

**C.** Prediction accuracy removes the need to inspect labels

**D.** It may proxy sensitive attributes or historical disadvantage

**Marked answer: D. It may proxy sensitive attributes or historical disadvantage**

**Explanation:** Predictive usefulness and appropriate, fair use are separate questions requiring context and scrutiny.

---

### 15 · Hard

Why is an explanation that sounds plausible not sufficient evidence of a model's actual reasoning process?

**A.** The explanation's fluency establishes its calibration on unseen examples

**B.** A longer explanation reveals the complete computational state behind the answer

**C.** The generated account is a verbatim trace of every parameter interaction

**D.** Generated explanations may not faithfully trace the computation

**Marked answer: D. Generated explanations may not faithfully trace the computation**

**Explanation:** Explanations should be assessed for faithfulness rather than accepted solely because they are coherent or persuasive.

---

## Digital Electronics

Quiz ID: `digital-electronics`

### 01 · Easy

How many distinct values does a binary digit represent?

**A.** Two

**B.** Three

**C.** Eight

**D.** Ten

**Marked answer: A. Two**

**Explanation:** A bit takes one of two logical values, usually written 0 and 1.

---

### 02 · Easy

Which logic gate outputs 1 only when both inputs are 1?

**A.** XOR

**B.** NOR

**C.** AND

**D.** OR

**Marked answer: C. AND**

**Explanation:** The two-input AND gate is true when both inputs are true.

---

### 03 · Easy

Which component is commonly used as an electronically controlled switch?

**A.** Transistor

**B.** Capacitor

**C.** Resistor

**D.** Inductor

**Marked answer: A. Transistor**

**Explanation:** Transistors can control current and implement switching functions in digital circuits.

---

### 04 · Easy

What does an analog-to-digital converter produce?

**A.** A mechanical rotation from an electric current

**B.** Digital samples of an analog signal

**C.** A higher mains voltage from a lower one

**D.** An analog output from a binary number

**Marked answer: B. Digital samples of an analog signal**

**Explanation:** An ADC represents sampled analog values using a finite set of digital codes.

---

### 05 · Easy

Which unit measures electrical resistance?

**A.** Volt

**B.** Farad

**C.** Ampere

**D.** Ohm

**Marked answer: D. Ohm**

**Explanation:** Resistance is measured in ohms; voltage, current and capacitance use the other listed units.

---

### 06 · Medium

For which two-input state do XOR and OR give different outputs?

**A.** The first is 0 and the second is 1

**B.** The first is 1 and the second is 0

**C.** Both inputs are 1

**D.** Both inputs are 0

**Marked answer: C. Both inputs are 1**

**Explanation:** OR returns 1 for two high inputs, whereas XOR returns 0; their outputs agree for the other three combinations.

---

### 07 · Medium

Why do digital inputs use voltage ranges rather than one exact voltage per bit?

**A.** High and low ranges must fully overlap

**B.** Logic requires infinitely precise voltages

**C.** Inputs are independent of voltage thresholds

**D.** Real signals include variation and noise

**Marked answer: D. Real signals include variation and noise**

**Explanation:** Threshold ranges and noise margins accommodate nonideal voltages while preserving logical interpretation.

---

### 08 · Medium

What can a flip-flop store?

**A.** One analog sample with unlimited precision

**B.** One bit of state

**C.** One byte of state

**D.** One processor word

**Marked answer: B. One bit of state**

**Explanation:** A flip-flop is a basic sequential storage element with two logical states.

---

### 09 · Medium

What does a clock signal help coordinate in a synchronous digital circuit?

**A.** The amplitude of analog sensor outputs

**B.** The resistance of the semiconductor

**C.** The power supply's voltage reference

**D.** When state updates occur

**Marked answer: D. When state updates occur**

**Explanation:** Clock edges coordinate state changes under timing constraints; the clock is not a guarantee of error-free operation.

---

### 10 · Medium

What is a pull-up resistor commonly used for?

**A.** Amplifying an output voltage

**B.** Retaining a bit without power

**C.** Rectifying an alternating supply

**D.** Biasing an undriven input high

**Marked answer: D. Biasing an undriven input high**

**Explanation:** A pull-up connects an input toward the supply through resistance while allowing another device to pull it low.

---

### 11 · Hard

A four-bit two's-complement value is 1101. What signed integer does it represent?

**A.** -5

**B.** -3

**C.** 5

**D.** 13

**Marked answer: B. -3**

**Explanation:** The leading bit has weight −8, so 1101 represents −8 + 4 + 0 + 1 = −3.

---

### 12 · Hard

An ideal 10-bit ADC spans 0–5 V. Approximately how large is one quantization step using 5/1024?

**A.** 0.488 millivolts

**B.** 4.88 millivolts

**C.** 19.5 millivolts

**D.** 48.8 millivolts

**Marked answer: B. 4.88 millivolts**

**Explanation:** Dividing 5 volts by 1024 gives approximately 0.00488 volts per step under the stated convention.

---

### 13 · Hard

What is metastability in a digital storage element?

**A.** A deliberate clock division that halves the sampling frequency

**B.** A permanent reversal of the storage element's logical truth table

**C.** A stable additional logic level used to store a third bit value

**D.** A temporary unresolved state near a sampling boundary

**Marked answer: D. A temporary unresolved state near a sampling boundary**

**Explanation:** Sampling near a timing transition can leave a storage element temporarily outside a clean logical state.

---

### 14 · Hard

Why can a mechanical pushbutton need debouncing?

**A.** Its contacts may produce several rapid transitions

**B.** Its internal memory stores one bit for each physical press

**C.** Its contacts divide the clock frequency by a fixed ratio

**D.** Its output is a smoothly varying analog signal by design

**Marked answer: A. Its contacts may produce several rapid transitions**

**Explanation:** Contact bounce can turn one press into several apparent edges; hardware or software can filter the transitions.

---

### 15 · Hard

Which two-input function equals NAND(NAND(A,A), NAND(B,B))?

**A.** OR

**B.** XOR

**C.** NOR

**D.** AND

**Marked answer: A. OR**

**Explanation:** The inner NAND gates invert A and B. The outer NAND negates their conjunction, which is A OR B by De Morgan's law.

---

## Technology & Society

Quiz ID: `technology-society`

### 01 · Easy

What is digital accessibility concerned with?

**A.** Use by people with varied abilities and disabilities

**B.** Giving administrators the same permissions as visitors

**C.** Restricting online services to the newest devices

**D.** Making every website use an identical color palette

**Marked answer: A. Use by people with varied abilities and disabilities**

**Explanation:** Accessibility addresses barriers in perceiving, understanding and operating digital systems.

---

### 02 · Easy

What does the digital divide describe?

**A.** A method for splitting a file into equal pieces

**B.** Unequal access to and use of digital technologies

**C.** The physical gap between keys on a keyboard

**D.** A difference between two programming-language dialects

**Marked answer: B. Unequal access to and use of digital technologies**

**Explanation:** The divide includes connectivity, devices, skills and meaningful opportunities to use technology.

---

### 03 · Easy

What is personal-data minimization?

**A.** Keeping every available detail for an unspecified future use

**B.** Collecting data appropriate and necessary for a purpose

**C.** Publishing internal account records to simplify administration

**D.** Replacing understandable notices with longer technical wording

**Marked answer: B. Collecting data appropriate and necessary for a purpose**

**Explanation:** Minimization limits unnecessary collection and retention relative to clearly defined purposes.

---

### 04 · Easy

What is an algorithmic recommendation system used to do?

**A.** Rank or suggest items for a user or context

**B.** Guarantee the truth of every item it ranks

**C.** Determine that every user has identical interests

**D.** Replace the need to define a product's objectives

**Marked answer: A. Rank or suggest items for a user or context**

**Explanation:** Recommendation systems prioritize items using signals and objectives that shape what users encounter.

---

### 05 · Easy

What is a dark pattern in interface design?

**A.** A chart with a dark background behind its axes

**B.** A design that manipulates or obstructs user choice

**C.** A visual theme using low-brightness colors

**D.** A loading screen displayed during nighttime hours

**Marked answer: B. A design that manipulates or obstructs user choice**

**Explanation:** Dark patterns steer choices through deceptive or obstructive design, not simply dark colors.

---

### 06 · Medium

A user retains a preselected privacy setting without reviewing alternatives. Which tendency can contribute?

**A.** The default effect

**B.** The gambler's fallacy

**C.** Recall bias

**D.** Survivorship bias

**Marked answer: A. The default effect**

**Explanation:** The default effect describes a tendency to retain preselected options; a retained default does not establish an informed preference.

---

### 07 · Medium

What do open, implementable technical specifications principally support?

**A.** Price discrimination

**B.** Data obfuscation

**C.** Interoperability

**D.** Vendor lock-in

**Marked answer: C. Interoperability**

**Explanation:** Independent systems can follow common specifications to exchange information, although compatible implementation is still required.

---

### 08 · Medium

A messaging app becomes more useful as more of a person's contacts join. What is this called?

**A.** A network effect

**B.** Capital depreciation

**C.** Price skimming

**D.** Vertical integration

**Marked answer: A. A network effect**

**Explanation:** The service's value depends partly on the participation of others, not just its standalone features.

---

### 09 · Medium

Which accessibility feature most directly provides text for spoken dialogue and relevant sound?

**A.** Audio description

**B.** Color correction

**C.** Image interpolation

**D.** Captions

**Marked answer: D. Captions**

**Explanation:** Captions represent speech and relevant sounds in text; audio description instead describes visual information.

---

### 10 · Medium

A company cannot easily leave a service because its data uses a proprietary format. Which issue is illustrated?

**A.** Vendor lock-in

**B.** Network neutrality

**C.** Packet congestion

**D.** Lossless compression

**Marked answer: A. Vendor lock-in**

**Explanation:** Switching barriers can arise from data formats, integrations, contracts and learned practices.

---

### 11 · Hard

A reviewer accepts an automated recommendation despite strong contradictory evidence. Which risk is illustrated?

**A.** Confirmation bias

**B.** Automation bias

**C.** Survivorship bias

**D.** Sampling bias

**Marked answer: B. Automation bias**

**Explanation:** Automation bias involves excessive reliance on an automated aid rather than appropriate critical assessment.

---

### 12 · Hard

Names are removed from a dataset containing full birth dates and small residential areas. What re-identification route remains?

**A.** Decrypting the birth dates with the postal code as a key

**B.** Inferring each name from the alphabetical order of rows

**C.** Matching those attributes with an external register

**D.** Recovering each name by reversing the file's compression

**Marked answer: C. Matching those attributes with an external register**

**Explanation:** Combinations of quasi-identifiers can be linked with external records even after direct names have been removed.

---

### 13 · Hard

A platform pursues watch time as a substitute for user well-being. What is the central measurement risk?

**A.** The proxy and objective are identical by construction

**B.** The proxy's numerical form removes the need for a value judgment

**C.** The objective is determined by the units used to report time

**D.** The proxy can diverge from the intended objective

**Marked answer: D. The proxy can diverge from the intended objective**

**Explanation:** Optimizing a measurable target can differ from achieving the broader social goal it is meant to represent.

---

### 14 · Hard

A workplace uses software to allocate shifts and evaluate worker performance. Which concept is most directly relevant?

**A.** Participatory budgeting

**B.** Open-source licensing

**C.** Algorithmic management

**D.** Lossless data compression

**Marked answer: C. Algorithmic management**

**Explanation:** Algorithmic management uses automated systems to organize, monitor or evaluate work, with implications for authority and accountability.

---

### 15 · Hard

What distinguishes meaningful consent from a recorded click alone?

**A.** Authorization established by a preselected checkbox

**B.** Agreement measured by the number of words displayed

**C.** Understanding and a genuine relevant choice

**D.** Acceptance inferred from an unrelated service contract

**Marked answer: C. Understanding and a genuine relevant choice**

**Explanation:** The meaningfulness of consent depends on relevant understanding and voluntariness, not simply an interface event.

---

## History of Innovation

Quiz ID: `history-innovation`

### 01 · Easy

Which machine did Charles Babbage design as a general-purpose programmable engine?

**A.** Pascaline

**B.** Jacquard Loom

**C.** Analytical Engine

**D.** Difference Engine

**Marked answer: C. Analytical Engine**

**Explanation:** The Analytical Engine was a proposed programmable calculating machine; the Difference Engine had a more specialized purpose.

---

### 02 · Easy

Which printing technology is associated with Gutenberg's fifteenth-century European workshop?

**A.** Movable metal type

**B.** Rotary offset printing

**C.** Laser toner printing

**D.** Photographic lithography

**Marked answer: A. Movable metal type**

**Explanation:** Gutenberg's system combined movable metal type with related printing techniques; earlier movable-type traditions existed in East Asia.

---

### 03 · Easy

What did the electric telegraph chiefly accelerate?

**A.** Long-distance transmission of coded messages

**B.** Ocean travel by steam-powered ships

**C.** The chemical preservation of food in sealed cans

**D.** The mechanical harvesting of cereal crops

**Marked answer: A. Long-distance transmission of coded messages**

**Explanation:** Telegraph networks separated message speed from the speed of physical transport along routes.

---

### 04 · Easy

Which storage technology used tiny magnetized rings in many mid-twentieth-century computers?

**A.** Mercury delay-line memory

**B.** Magnetic-core memory

**C.** Electrostatic tube memory

**D.** Punched paper tape

**Marked answer: B. Magnetic-core memory**

**Explanation:** Magnetic-core memory stored bits in the magnetic orientation of small ferrite rings; the alternatives used different physical mechanisms.

---

### 05 · Easy

What did the World Wide Web add to the internet?

**A.** A hypertext system of linked resources

**B.** The first method for moving packets between computers

**C.** A replacement for every existing internet protocol

**D.** The first electrical signal sent through a wire

**Marked answer: A. A hypertext system of linked resources**

**Explanation:** The Web uses linked documents and related protocols on top of internet infrastructure.

---

### 06 · Medium

Why did the steam engine's impact depend on more than its initial invention?

**A.** A prototype supplied every later manufacturing tolerance

**B.** A patent fixed local fuel costs independently of supply

**C.** A demonstration completed complementary transport systems

**D.** Manufacturing, fuel and applications developed together

**Marked answer: D. Manufacturing, fuel and applications developed together**

**Explanation:** Widespread impact required improvements and supporting systems, not simply a single invention date.

---

### 07 · Medium

Which feature of the Jacquard loom influenced ideas about programmable machinery?

**A.** Radio receivers converting signals into keystrokes

**B.** Magnetic heads reading stored binary patterns

**C.** Punched cards controlling patterned operations

**D.** Semiconductor circuits storing textile instructions

**Marked answer: C. Punched cards controlling patterned operations**

**Explanation:** The loom's card-controlled patterns offered an influential example of external instructions directing machinery.

---

### 08 · Medium

What distinguished a monolithic integrated circuit from a circuit assembled from discrete transistors?

**A.** Instructions represented as holes in an external card deck

**B.** Each transistor mounted separately on a circuit board

**C.** Logical state stored by moving a mechanical relay contact

**D.** Multiple components fabricated on one semiconductor chip

**Marked answer: D. Multiple components fabricated on one semiconductor chip**

**Explanation:** Monolithic integration placed interconnected circuit elements on one semiconductor substrate, advancing miniaturization beyond discrete-component assemblies.

---

### 09 · Medium

Why were standardized interchangeable parts important to manufacturing?

**A.** They allowed assembled machines to use parts of arbitrary shape and size

**B.** They eliminated the need to define consistent dimensional tolerances

**C.** They made each component depend on individual fitting to a particular product

**D.** They supported assembly and repair across matched components

**Marked answer: D. They supported assembly and repair across matched components**

**Explanation:** Interchangeability depends on manufacturing consistency and tolerances, not simply producing many pieces.

---

### 10 · Medium

Which pair is associated with the development of TCP/IP?

**A.** Vint Cerf and Bob Kahn

**B.** Tim Berners-Lee and Robert Cailliau

**C.** Donald Davies and Paul Baran

**D.** Alan Turing and John von Neumann

**Marked answer: A. Vint Cerf and Bob Kahn**

**Explanation:** Cerf and Kahn helped develop the internetworking architecture underlying TCP/IP.

---

### 11 · Hard

Which network carried the 1969 host-to-host message between UCLA and SRI?

**A.** ARPANET

**B.** CSNET

**C.** BITNET

**D.** NSFNET

**Marked answer: A. ARPANET**

**Explanation:** ARPANET connected the early hosts; the other named research networks appeared later.

---

### 12 · Hard

What made containerization more than a new shape of shipping box?

**A.** The container kept each cargo type tied to a separate handling system

**B.** Standard interfaces linked ships, ports and inland transport

**C.** Its value depended on each shipping line selecting incompatible dimensions

**D.** The box's shape removed the need to coordinate ships with inland transport

**Marked answer: B. Standard interfaces linked ships, ports and inland transport**

**Explanation:** The system's efficiency relied on coordinated standards, handling equipment and transport networks.

---

### 13 · Hard

Why did railway networks encourage standardized timekeeping?

**A.** Steam engines required identical boiler temperatures at every station

**B.** Railway gauges changed with each town's longitude

**C.** Timetables linked towns using different local solar times

**D.** Mechanical clocks could not display local time after a train departed

**Marked answer: C. Timetables linked towns using different local solar times**

**Explanation:** Coordinating long-distance schedules increased the practical need for shared time standards.

---

### 14 · Hard

What distinguishes an invention from diffusion of that invention?

**A.** The replacement of a technical standard by an incompatible one

**B.** The legal registration of an invention's exclusive patent rights

**C.** The creation of a new technical principle before any working use

**D.** Creating a technique versus its spread and adoption

**Marked answer: D. Creating a technique versus its spread and adoption**

**Explanation:** Diffusion concerns how a technique spreads through users and settings, which can be uneven and require adaptation.

---

### 15 · Hard

Why can a technology's later uses differ from its creators' intentions?

**A.** Successful designs cannot combine with other inventions

**B.** Initial intentions fix subsequent institutional use

**C.** A patent describes every later social application

**D.** New users and institutions adapt its possibilities

**Marked answer: D. New users and institutions adapt its possibilities**

**Explanation:** Technologies evolve through use, combination and institutional choices, not solely through initial design intentions.

---

