# CURIO — technology — review draft

Status: review copy of current local-site content; independent editorial review is ongoing. Date: 17 November 2026.

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

**A.** Store a value for later use

**B.** Repeat a set of operations

**C.** Choose one conditional branch

**D.** Define an input for a function

**Marked answer: B. Repeat a set of operations**

**Explanation:** Loops express repeated execution subject to a count or condition.

---

### 03 · Easy

What is a function's parameter?

**A.** The amount of memory installed in a computer

**B.** An input named in its definition

**C.** The file extension of its source code

**D.** The value printed by every program

**Marked answer: B. An input named in its definition**

**Explanation:** Parameters describe inputs accepted by a function; arguments are values supplied when it is called.

---

### 04 · Easy

What is a Boolean value?

**A.** True or false

**B.** A fractional numeric value

**C.** An ordered sequence of characters

**D.** A signed whole number

**Marked answer: A. True or false**

**Explanation:** Boolean logic uses two truth values, often represented as true and false.

---

### 05 · Easy

What is an algorithm?

**A.** A particular manufacturer's processor model

**B.** The physical cable used by a network

**C.** The graphical appearance of an application

**D.** A defined procedure for solving a problem

**Marked answer: D. A defined procedure for solving a problem**

**Explanation:** An algorithm specifies a sequence or structure of steps for carrying out a task.

---

### 06 · Medium

What usually distinguishes a list from a set in abstract data structures?

**A.** A list is unordered; a set assigns numeric indexes

**B.** A list has positions; a set has unique members

**C.** A list removes duplicates; a set retains repeated members

**D.** A list enforces uniqueness; a set defines positions

**Marked answer: B. A list has positions; a set has unique members**

**Explanation:** Lists are ordered sequences, while mathematical sets do not retain duplicate members; language implementations may add ordering behavior.

---

### 07 · Medium

What is a base case in recursion?

**A.** A condition that stops further recursive calls

**B.** The original call before the first recursive call

**C.** The rule combining results from recursive subproblems

**D.** The expression that creates the next recursive call

**Marked answer: A. A condition that stops further recursive calls**

**Explanation:** A terminating case prevents recursion from continuing indefinitely when the recursive process reaches it.

---

### 08 · Medium

What does a unit test aim to check?

**A.** The product's acceptance by its intended users

**B.** The complete application under a high request load

**C.** The interaction between integrated program modules

**D.** A small, focused behavior of a program

**Marked answer: D. A small, focused behavior of a program**

**Explanation:** Unit tests check limited behaviors in isolation or with controlled dependencies; they do not prove complete correctness.

---

### 09 · Medium

Which design lets a calculation be tested without reading a file?

**A.** Store the file path in a shared global variable

**B.** Open and parse the file inside that calculation

**C.** Pass parsed values into a calculation function

**D.** Print the result instead of returning any value

**Marked answer: C. Pass parsed values into a calculation function**

**Explanation:** Separating parsing from calculation allows controlled values to be supplied directly during a test.

---

### 10 · Medium

For a sorted array, what does binary search repeatedly do?

**A.** Sort the whole array after each comparison

**B.** Build a new array containing every duplicate value

**C.** Discard roughly half the remaining search interval

**D.** Compare the target with every element in order

**Marked answer: C. Discard roughly half the remaining search interval**

**Explanation:** Binary search uses order to narrow the interval, giving logarithmic comparison growth under its standard assumptions.

---

### 11 · Hard

An integer loop visits i = 0, 1, 2, 3, 4. How many iterations occur?

**A.** 5

**B.** 4

**C.** 3

**D.** 6

**Marked answer: A. 5**

**Explanation:** Both endpoints are included in the listed sequence, so the loop body executes five times.

---

### 12 · Hard

Why can caching a function's results be incorrect if the function depends on changing external state?

**A.** Every cached value is checked against its source before reuse

**B.** A cache changes the function's external dependencies into local variables

**C.** The argument-based key automatically captures all external dependencies

**D.** Identical arguments may produce different results later

**Marked answer: D. Identical arguments may produce different results later**

**Explanation:** Memoization needs keys or invalidation rules that account for relevant dependencies.

---

### 13 · Hard

Two nested loops each run n times with constant work in the inner body. What is the usual time growth?

**A.** O(n log n)

**B.** O(log n)

**C.** O(n²)

**D.** O(n)

**Marked answer: C. O(n²)**

**Explanation:** There are n × n inner-body executions, assuming both loops run independently n times.

---

### 14 · Hard

A copied object shares a nested list with the original. What kind of copying most likely occurred?

**A.** A deep copy

**B.** An immutable copy

**C.** A shallow copy

**D.** A serialized copy

**Marked answer: C. A shallow copy**

**Explanation:** A shallow copy duplicates the outer container while retaining references to nested objects.

---

### 15 · Hard

Why can two threads each performing 'read, add one, write' lose an increment?

**A.** Reading a shared value automatically acquires mutual exclusion

**B.** Writing the new value merges updates from competing threads

**C.** Thread creation implicitly serializes access to the shared value

**D.** Their read-modify-write sequences can interleave

**Marked answer: D. Their read-modify-write sequences can interleave**

**Explanation:** Without suitable synchronization or atomic operations, both threads can read the same old value and overwrite one another's updates.

---

## Internet & Networks

Quiz ID: `internet-networks`

### 01 · Easy

What is DNS commonly used to do?

**A.** Assign keyboard shortcuts inside a browser

**B.** Compress video for a slower connection

**C.** Encrypt the contents of every website

**D.** Resolve domain names to network information

**Marked answer: D. Resolve domain names to network information**

**Explanation:** DNS maps names to records, including addresses used to locate internet services.

---

### 02 · Easy

What is an IP address used for in networking?

**A.** Specifying a webpage's font family

**B.** Measuring the age of a server's processor

**C.** Identifying an interface for packet delivery

**D.** Recording a browser's entire search history

**Marked answer: C. Identifying an interface for packet delivery**

**Explanation:** IP addresses support addressing and routing at the network layer.

---

### 03 · Easy

What is a router's basic role?

**A.** Create a new password for every user

**B.** Convert source code into machine instructions

**C.** Forward packets between networks

**D.** Display the contents of HTML pages

**Marked answer: C. Forward packets between networks**

**Explanation:** Routers use network information to direct packets toward their destinations.

---

### 04 · Easy

What does HTTPS add to ordinary HTTP communication?

**A.** A guarantee of honest site ownership

**B.** Automatic encryption of stored server files

**C.** Protection from every browser exploit

**D.** Transport protection using TLS

**Marked answer: D. Transport protection using TLS**

**Explanation:** HTTPS protects data in transit through TLS but does not by itself establish that a site's content or owner is trustworthy.

---

### 05 · Easy

What does bandwidth describe in a common networking context?

**A.** The capacity of a communication link

**B.** The physical mass of a network cable

**C.** The number of pixels displayed by a monitor

**D.** The time taken for one packet to make a round trip

**Marked answer: A. The capacity of a communication link**

**Explanation:** Bandwidth concerns capacity; latency concerns delay, and actual throughput can be lower than capacity.

---

### 06 · Medium

Why can a high-bandwidth connection still feel slow for interactive tasks?

**A.** Link capacity eliminates server delay

**B.** Throughput must fall as capacity rises

**C.** Round-trip latency can remain high

**D.** Bandwidth measures response delay directly

**Marked answer: C. Round-trip latency can remain high**

**Explanation:** Latency affects how quickly responses return even when large data transfers are possible.

---

### 07 · Medium

Which service does TCP normally provide to an application?

**A.** A reliable, boundary-preserving message service

**B.** An ordered, reliable byte stream

**C.** A permanently fixed packet routing path

**D.** A fixed-delay datagram delivery service

**Marked answer: B. An ordered, reliable byte stream**

**Explanation:** TCP handles ordering and retransmission at its transport layer; applications still need to manage their own semantics and failures.

---

### 08 · Medium

What distinguishes a private LAN address from a public internet address?

**A.** Its scope is determined by the web browser's display settings

**B.** Its intended scope is within private networks

**C.** Its numeric value proves that the traffic is encrypted

**D.** Its assigned host is guaranteed to use a permanent address

**Marked answer: B. Its intended scope is within private networks**

**Explanation:** Private address ranges are reserved for internal use and are not globally routed as ordinary public addresses.

---

### 09 · Medium

Why do content delivery networks place caches in multiple regions?

**A.** To replace the need for DNS lookups

**B.** To centralize every content computation

**C.** To remove cache expiry requirements

**D.** To serve content nearer to users

**Marked answer: D. To serve content nearer to users**

**Explanation:** Nearby caches can reduce latency and distribute load, while cache policy and origin behavior still matter.

---

### 10 · Medium

What does a port number help identify?

**A.** A transport-layer endpoint or service

**B.** The DNS zone's authoritative name-server record

**C.** The interface's physical link-layer address

**D.** The host's network-layer routing prefix

**Marked answer: A. A transport-layer endpoint or service**

**Explanation:** Transport protocols use ports to distinguish communication endpoints on a host.

---

### 11 · Hard

Why does successful DNS resolution not prove a website is reachable?

**A.** Routing, server or transport failures can remain

**B.** A resolved name establishes an open application port

**C.** An address lookup supplies a trusted server certificate

**D.** DNS completes the application transaction on lookup

**Marked answer: A. Routing, server or transport failures can remain**

**Explanation:** Finding an address is one stage; reaching the service and obtaining a response require further successful steps.

---

### 12 · Hard

What can cause packets from one communication to arrive out of order?

**A.** Transport ports assign every packet a new network

**B.** Different routes or variable network delays

**C.** A MAC address encodes application message order

**D.** A DNS label sets packet priority along the route

**Marked answer: B. Different routes or variable network delays**

**Explanation:** Packet networks can introduce different delays; protocols such as TCP can reorder data before delivering it to applications.

---

### 13 · Hard

Why might increasing bandwidth not speed up a request dominated by a slow database query?

**A.** Server processing remains the bottleneck

**B.** More bandwidth reduces the query's data size

**C.** Link capacity determines query CPU time

**D.** Client bandwidth fixes the rows examined

**Marked answer: A. Server processing remains the bottleneck**

**Explanation:** End-to-end performance is limited by the stage consuming the most relevant time or capacity.

---

### 14 · Hard

Why does UDP's lack of built-in retransmission sometimes suit real-time applications?

**A.** UDP waits for missing datagrams before delivery

**B.** UDP compresses media before network transmission

**C.** UDP supplies an ordered stream with retransmission

**D.** Late data may be less useful than current data

**Marked answer: D. Late data may be less useful than current data**

**Explanation:** Applications can choose how to handle loss and delay rather than inheriting TCP's ordered-stream behavior.

---

### 15 · Hard

What distinguishes authentication of a server certificate from DNS resolution?

**A.** Assigning an IP address versus translating a private network address

**B.** Selecting the fastest route versus measuring the packet payload

**C.** Verifying a claimed server identity versus locating records

**D.** Rendering HTML versus selecting a transport-layer port number

**Marked answer: C. Verifying a claimed server identity versus locating records**

**Explanation:** DNS supplies records; certificate validation helps verify identity within the TLS trust model.

---

## Cybersecurity Basics

Quiz ID: `cybersecurity-basics`

### 01 · Easy

What is phishing?

**A.** A test of how quickly a hard drive can read data

**B.** A method for reducing a video's file size

**C.** Deception aimed at obtaining information or actions

**D.** A process for assigning local printer addresses

**Marked answer: C. Deception aimed at obtaining information or actions**

**Explanation:** Phishing uses deceptive messages or sites to induce disclosures or harmful actions.

---

### 02 · Easy

Which is an example of a second authentication factor beyond a password?

**A.** A physical security key

**B.** An extra password phrase

**C.** A second memorized PIN

**D.** Another security-question answer

**Marked answer: A. A physical security key**

**Explanation:** A security key supplies possession-based evidence, distinct from another knowledge-based secret.

---

### 03 · Easy

What does encryption primarily protect when properly used?

**A.** Data integrity

**B.** Service availability

**C.** Message authenticity

**D.** Data confidentiality

**Marked answer: D. Data confidentiality**

**Explanation:** Encryption limits intelligibility without the key; integrity and authenticity require suitable additional properties or modes.

---

### 04 · Easy

What is a backup?

**A.** A pointer to an original file

**B.** A live synchronization setting

**C.** A file-deletion confirmation

**D.** A recoverable copy of data

**Marked answer: D. A recoverable copy of data**

**Explanation:** A useful backup supports restoration and must be protected and tested appropriately.

---

### 05 · Easy

Why should software updates be applied when they fix security flaws?

**A.** They can remove known vulnerabilities

**B.** They replace the need for any account permissions

**C.** They guarantee that the device will never be attacked

**D.** They turn public data into secret information automatically

**Marked answer: A. They can remove known vulnerabilities**

**Explanation:** Security updates address particular flaws, while other protective measures remain necessary.

---

### 06 · Medium

Why is a unique password for each service useful?

**A.** A unique secret replaces possession-based factors

**B.** Uniqueness prevents deceptive sign-in pages

**C.** Uniqueness makes a short password resist guessing

**D.** One breach is less likely to expose other accounts

**Marked answer: D. One breach is less likely to expose other accounts**

**Explanation:** Reused credentials let one compromise spread through credential-stuffing attempts.

---

### 07 · Medium

What is the principle of least privilege?

**A.** Retaining former-role permissions for possible future use

**B.** Granting broad access mainly on personal trust

**C.** Assigning identical record access to every signed-in user

**D.** Granting only the access needed for a task

**Marked answer: D. Granting only the access needed for a task**

**Explanation:** Access should be limited to relevant duties and reviewed as those duties change.

---

### 08 · Medium

Why is hashing a password different from encrypting it for later recovery?

**A.** A hash validates a password by storing each character in a separate field

**B.** Encryption and hashing both require recovering the original during login

**C.** A secure password hash is intended for verification, not reversal

**D.** A password hash is encryption with a publicly stored decryption key

**Marked answer: C. A secure password hash is intended for verification, not reversal**

**Explanation:** Password hashing uses appropriate slow schemes and salts; guessing attacks still need consideration.

---

### 09 · Medium

What is a password salt used to do?

**A.** Storing a reversible copy of the user's authentication secret

**B.** Make stored hashes differ across otherwise identical passwords

**C.** Replacing the slow work factor in a password-hashing scheme

**D.** Serving as a hidden decryption key for the original password

**Marked answer: B. Make stored hashes differ across otherwise identical passwords**

**Explanation:** Unique salts reduce the usefulness of precomputed tables and cross-account hash matching.

---

### 10 · Medium

Why can a padlock icon coexist with a fraudulent website?

**A.** TLS prevents an operator from seeing submitted credentials

**B.** An encrypted connection can lead to a dishonest operator

**C.** The padlock demonstrates an audit of financial honesty

**D.** A certificate verifies the operator's business claims

**Marked answer: B. An encrypted connection can lead to a dishonest operator**

**Explanation:** Transport protection is distinct from judging the destination's honesty or content.

---

### 11 · Hard

Why is a single-use, expiring recovery link safer than a permanent reusable link?

**A.** Its usefulness is constrained after use or time passes

**B.** One-time use encrypts the email channel carrying the recovery message

**C.** An expiring token prevents its URL from being copied before use

**D.** Expiry establishes that the person opening the link owns the account

**Marked answer: A. Its usefulness is constrained after use or time passes**

**Explanation:** Expiry and one-time use limit exposure, but links must still be protected and recovery flows carefully designed.

---

### 12 · Hard

What flaw allows a user to access another person's record by changing an identifier?

**A.** Cross-site request forgery

**B.** Broken object-level authorization

**C.** Credential-stuffing attacks

**D.** SQL command injection

**Marked answer: B. Broken object-level authorization**

**Explanation:** The server must authorize access to each object, not merely check that a request has a familiar identifier.

---

### 13 · Hard

Why can deleting an account fail to invalidate an already-issued signed access token immediately?

**A.** Deletion changes the token's signed expiration immediately

**B.** Token validation may not check current session state

**C.** Deleting an account erases every copy of its issued token

**D.** Signature verification queries current deletion state

**Marked answer: B. Token validation may not check current session state**

**Explanation:** Stateless token verification can remain valid until expiry unless the system checks revocation or session state.

---

### 14 · Hard

What does parameterized SQL chiefly help prevent?

**A.** Broken object authorization

**B.** Credential reuse attacks

**C.** SQL injection through input values

**D.** Cross-site request forgery

**Marked answer: C. SQL injection through input values**

**Explanation:** Parameters keep supplied values separate from SQL structure when used correctly; authorization is a separate concern.

---

### 15 · Hard

Why is an untested backup a weak recovery guarantee?

**A.** It may be incomplete, corrupt or inaccessible

**B.** A copy log establishes successful restoration

**C.** Its presence proves application recoverability

**D.** Current replication replaces historical recovery

**Marked answer: A. It may be incomplete, corrupt or inaccessible**

**Explanation:** Restoration testing checks whether the retained data and recovery process actually support recovery.

---

## Artificial Intelligence

Quiz ID: `artificial-intelligence`

### 01 · Easy

What is supervised learning trained with?

**A.** Examples paired with target outputs

**B.** Examples that have no measurable attributes

**C.** A list of tasks without any available observations

**D.** A processor with no stored parameters

**Marked answer: A. Examples paired with target outputs**

**Explanation:** Supervised learning uses input-target examples to learn a predictive relationship.

---

### 02 · Easy

What does a model's training data provide?

**A.** A guarantee of correct answers to future questions

**B.** A replacement for the program used to run the model

**C.** A complete explanation of every internal decision

**D.** Examples from which patterns can be learned

**Marked answer: D. Examples from which patterns can be learned**

**Explanation:** Training data shapes learned patterns but does not guarantee generalization or explain every decision.

---

### 03 · Easy

What is classification in machine learning?

**A.** Predicting a continuous numerical value

**B.** Learning an action policy from rewards

**C.** Assigning inputs to categories

**D.** Finding unlabeled groups of similar inputs

**Marked answer: C. Assigning inputs to categories**

**Explanation:** Classification predicts categories, whereas regression commonly predicts numerical quantities.

---

### 04 · Easy

What does an AI system's prediction confidence represent most safely without further validation?

**A.** A verified probability that the prediction is correct

**B.** The number of independent experts agreeing with the prediction

**C.** A model-generated score needing interpretation

**D.** The moral importance of the predicted outcome

**Marked answer: C. A model-generated score needing interpretation**

**Explanation:** Confidence scores require calibration and evaluation before they can be treated as reliable probabilities.

---

### 05 · Easy

What is a generative model designed to do?

**A.** Produce outputs resembling learned data patterns

**B.** Determine legal ownership of every training example

**C.** Display only exact copies of its source-code instructions

**D.** Guarantee factual truth for every generated sentence

**Marked answer: A. Produce outputs resembling learned data patterns**

**Explanation:** Generative models produce content from learned structure, with reliability depending on the task and system.

---

### 06 · Medium

What is overfitting?

**A.** Having insufficient capacity to fit even the training patterns

**B.** Reducing the model's sensitivity to accidental training variation

**C.** Learning training-specific patterns that generalize poorly

**D.** Evaluating on data kept separate from parameter fitting

**Marked answer: C. Learning training-specific patterns that generalize poorly**

**Explanation:** A model can fit training data closely while failing on new data, including by learning noise or accidental correlations.

---

### 07 · Medium

Why keep a test set separate from training?

**A.** To duplicate convenient examples from the training set

**B.** To replace task-specific error analysis with one score

**C.** To estimate performance on unseen examples

**D.** To tune parameters on the final evaluation answers

**Marked answer: C. To estimate performance on unseen examples**

**Explanation:** Held-out data supports evaluation of generalization when it is used carefully and not repeatedly optimized against.

---

### 08 · Medium

What is data leakage in model evaluation?

**A.** A model uses a publicly documented numerical optimization method

**B.** Unavailable target information enters the training or evaluation setup

**C.** A training algorithm compresses input images before fitting the model

**D.** A dataset is transferred to an authorized long-term backup service

**Marked answer: B. Unavailable target information enters the training or evaluation setup**

**Explanation:** Leakage can create misleading performance by exposing information that would not be available in real use.

---

### 09 · Medium

Why can a balanced overall accuracy hide poor minority-group performance?

**A.** An overall score requires equal subgroup error rates

**B.** Model size directly measures each subgroup's accuracy

**C.** A majority score fixes the error rate of each minority

**D.** Aggregate results can mask subgroup differences

**Marked answer: D. Aggregate results can mask subgroup differences**

**Explanation:** Relevant subgroup and error-type analysis can reveal disparities concealed by a single summary metric.

---

### 10 · Medium

What is distribution shift?

**A.** New data differs meaningfully from training conditions

**B.** Changing the format of an output report without changing its data

**C.** Moving a dataset between folders while its examples remain unchanged

**D.** Reusing one training example during several optimization passes

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

**A.** 99%

**B.** 1%

**C.** 50%

**D.** 0%

**Marked answer: D. 0%**

**Explanation:** It identifies none of the actual positive cases, so recall is zero despite 99% accuracy.

---

### 13 · Hard

What does retrieval-augmented generation add to a language-model workflow?

**A.** Relevant retrieved material as additional context

**B.** A replacement of the model with a static search index

**C.** A constraint preventing contradiction of every source

**D.** A proof that retrieved sources are factually complete

**Marked answer: A. Relevant retrieved material as additional context**

**Explanation:** Retrieval can provide evidence or context, but source quality, relevance and faithful use still require evaluation.

---

### 14 · Hard

Why does correlation between an input and an outcome not establish fairness of using it?

**A.** Prediction accuracy removes the need to inspect labels

**B.** It may proxy sensitive attributes or historical disadvantage

**C.** A numerical score makes historical disadvantage irrelevant

**D.** Correlation establishes appropriate use across contexts

**Marked answer: B. It may proxy sensitive attributes or historical disadvantage**

**Explanation:** Predictive usefulness and appropriate, fair use are separate questions requiring context and scrutiny.

---

### 15 · Hard

Why is an explanation that sounds plausible not sufficient evidence of a model's actual reasoning process?

**A.** The explanation's fluency establishes its calibration on unseen examples

**B.** Generated explanations may not faithfully trace the computation

**C.** A longer explanation reveals the complete computational state behind the answer

**D.** The generated account is a verbatim trace of every parameter interaction

**Marked answer: B. Generated explanations may not faithfully trace the computation**

**Explanation:** Explanations should be assessed for faithfulness rather than accepted solely because they are coherent or persuasive.

---

## Digital Electronics

Quiz ID: `digital-electronics`

### 01 · Easy

How many distinct values does a binary digit represent?

**A.** Eight

**B.** Two

**C.** Three

**D.** Ten

**Marked answer: B. Two**

**Explanation:** A bit takes one of two logical values, usually written 0 and 1.

---

### 02 · Easy

Which logic gate outputs 1 only when both inputs are 1?

**A.** OR

**B.** NOR

**C.** XOR

**D.** AND

**Marked answer: D. AND**

**Explanation:** The two-input AND gate is true when both inputs are true.

---

### 03 · Easy

Which component is commonly used as an electronically controlled switch?

**A.** Capacitor

**B.** Inductor

**C.** Resistor

**D.** Transistor

**Marked answer: D. Transistor**

**Explanation:** Transistors can control current and implement switching functions in digital circuits.

---

### 04 · Easy

What does an analog-to-digital converter produce?

**A.** Digital samples of an analog signal

**B.** A mechanical rotation from an electric current

**C.** A higher mains voltage from a lower one

**D.** An analog output from a binary number

**Marked answer: A. Digital samples of an analog signal**

**Explanation:** An ADC represents sampled analog values using a finite set of digital codes.

---

### 05 · Easy

Which unit measures electrical resistance?

**A.** Ampere

**B.** Ohm

**C.** Volt

**D.** Farad

**Marked answer: B. Ohm**

**Explanation:** Resistance is measured in ohms; voltage, current and capacitance use the other listed units.

---

### 06 · Medium

What distinguishes XOR from OR for two binary inputs?

**A.** XOR is 1 only when both inputs are 0

**B.** XOR is 0 whenever both inputs are 0 only

**C.** XOR is 1 whenever either input is 1

**D.** XOR is 0 when both inputs are 1

**Marked answer: D. XOR is 0 when both inputs are 1**

**Explanation:** Exclusive OR is true for different inputs and false for matching inputs.

---

### 07 · Medium

Why do digital inputs use voltage ranges rather than one exact voltage per bit?

**A.** Inputs are independent of voltage thresholds

**B.** High and low ranges must fully overlap

**C.** Logic requires infinitely precise voltages

**D.** Real signals include variation and noise

**Marked answer: D. Real signals include variation and noise**

**Explanation:** Threshold ranges and noise margins accommodate nonideal voltages while preserving logical interpretation.

---

### 08 · Medium

What can a flip-flop store?

**A.** One bit of state

**B.** One byte of state

**C.** One analog sample with unlimited precision

**D.** One processor word

**Marked answer: A. One bit of state**

**Explanation:** A flip-flop is a basic sequential storage element with two logical states.

---

### 09 · Medium

What does a clock signal help coordinate in a synchronous digital circuit?

**A.** The amplitude of analog sensor outputs

**B.** The resistance of the semiconductor

**C.** When state updates occur

**D.** The power supply's voltage reference

**Marked answer: C. When state updates occur**

**Explanation:** Clock edges coordinate state changes under timing constraints; the clock is not a guarantee of error-free operation.

---

### 10 · Medium

What is a pull-up resistor commonly used for?

**A.** Converting an alternating supply into a direct supply

**B.** Doubling the voltage available across a loaded output

**C.** Giving an otherwise undriven input a defined high level

**D.** Holding a data bit after the circuit loses power

**Marked answer: C. Giving an otherwise undriven input a defined high level**

**Explanation:** A pull-up biases an input toward the supply while allowing another device to pull it low.

---

### 11 · Hard

How many distinct codes can an ideal 8-bit unsigned representation express?

**A.** 512

**B.** 256

**C.** 128

**D.** 255

**Marked answer: B. 256**

**Explanation:** Eight bits provide 2 to the eighth power, or 256 possible codes, from 0 through 255 for an unsigned integer.

---

### 12 · Hard

An ideal 10-bit ADC spans 0–5 V. Approximately how large is one quantization step using 5/1024?

**A.** 0.488 millivolts

**B.** 48.8 millivolts

**C.** 4.88 millivolts

**D.** 19.5 millivolts

**Marked answer: C. 4.88 millivolts**

**Explanation:** Dividing 5 volts by 1024 gives approximately 0.00488 volts per step under the stated convention.

---

### 13 · Hard

What is metastability in a digital storage element?

**A.** A stable additional logic level used to store a third bit value

**B.** A temporary unresolved state near a sampling boundary

**C.** A deliberate clock division that halves the sampling frequency

**D.** A permanent reversal of the storage element's logical truth table

**Marked answer: B. A temporary unresolved state near a sampling boundary**

**Explanation:** Sampling near a timing transition can leave a storage element temporarily outside a clean logical state.

---

### 14 · Hard

Why can a mechanical pushbutton need debouncing?

**A.** Its contacts divide the clock frequency by a fixed ratio

**B.** Its internal memory stores one bit for each physical press

**C.** Its contacts may produce several rapid transitions

**D.** Its output is a smoothly varying analog signal by design

**Marked answer: C. Its contacts may produce several rapid transitions**

**Explanation:** Contact bounce can turn one press into several apparent edges; hardware or software can filter the transitions.

---

### 15 · Hard

Which two-input function equals NAND(NAND(A,A), NAND(B,B))?

**A.** OR

**B.** XOR

**C.** AND

**D.** NOR

**Marked answer: A. OR**

**Explanation:** The inner NAND gates invert A and B. The outer NAND negates their conjunction, which is A OR B by De Morgan's law.

---

## Technology & Society

Quiz ID: `technology-society`

### 01 · Easy

What is digital accessibility concerned with?

**A.** Making every website use an identical color palette

**B.** Restricting online services to the newest devices

**C.** Use by people with varied abilities and disabilities

**D.** Giving administrators the same permissions as visitors

**Marked answer: C. Use by people with varied abilities and disabilities**

**Explanation:** Accessibility addresses barriers in perceiving, understanding and operating digital systems.

---

### 02 · Easy

What does the digital divide describe?

**A.** Unequal access to and use of digital technologies

**B.** The physical gap between keys on a keyboard

**C.** A method for splitting a file into equal pieces

**D.** A difference between two programming-language dialects

**Marked answer: A. Unequal access to and use of digital technologies**

**Explanation:** The divide includes connectivity, devices, skills and meaningful opportunities to use technology.

---

### 03 · Easy

What is personal-data minimization?

**A.** Keeping every available detail for an unspecified future use

**B.** Replacing understandable notices with longer technical wording

**C.** Publishing internal account records to simplify administration

**D.** Collecting data appropriate and necessary for a purpose

**Marked answer: D. Collecting data appropriate and necessary for a purpose**

**Explanation:** Minimization limits unnecessary collection and retention relative to clearly defined purposes.

---

### 04 · Easy

What is an algorithmic recommendation system used to do?

**A.** Replace the need to define a product's objectives

**B.** Rank or suggest items for a user or context

**C.** Guarantee the truth of every item it ranks

**D.** Determine that every user has identical interests

**Marked answer: B. Rank or suggest items for a user or context**

**Explanation:** Recommendation systems prioritize items using signals and objectives that shape what users encounter.

---

### 05 · Easy

What is a dark pattern in interface design?

**A.** A design that manipulates or obstructs user choice

**B.** A visual theme using low-brightness colors

**C.** A chart with a dark background behind its axes

**D.** A loading screen displayed during nighttime hours

**Marked answer: A. A design that manipulates or obstructs user choice**

**Explanation:** Dark patterns steer choices through deceptive or obstructive design, not simply dark colors.

---

### 06 · Medium

A user retains a preselected privacy setting without reviewing alternatives. Which tendency can contribute?

**A.** Survivorship bias

**B.** Recall bias

**C.** Default inertia

**D.** Gambler's fallacy

**Marked answer: C. Default inertia**

**Explanation:** Defaults often persist because of habit, effort or framing; retaining one does not prove a fully informed preference.

---

### 07 · Medium

What do open, implementable technical specifications principally support?

**A.** Vendor lock-in

**B.** Interoperability

**C.** Price discrimination

**D.** Data obfuscation

**Marked answer: B. Interoperability**

**Explanation:** Independent systems can follow common specifications to exchange information, although compatible implementation is still required.

---

### 08 · Medium

A messaging app becomes more useful as more of a person's contacts join. What is this called?

**A.** Vertical integration

**B.** Capital depreciation

**C.** A network effect

**D.** Price skimming

**Marked answer: C. A network effect**

**Explanation:** The service's value depends partly on the participation of others, not just its standalone features.

---

### 09 · Medium

Which accessibility feature most directly provides text for spoken dialogue and relevant sound?

**A.** Image interpolation

**B.** Color correction

**C.** Audio description

**D.** Captions

**Marked answer: D. Captions**

**Explanation:** Captions represent speech and relevant sounds in text; audio description instead describes visual information.

---

### 10 · Medium

A company cannot easily leave a service because its data uses a proprietary format. Which issue is illustrated?

**A.** Packet congestion

**B.** Vendor lock-in

**C.** Network neutrality

**D.** Lossless compression

**Marked answer: B. Vendor lock-in**

**Explanation:** Switching barriers can arise from data formats, integrations, contracts and learned practices.

---

### 11 · Hard

A reviewer accepts an automated recommendation despite strong contradictory evidence. Which risk is illustrated?

**A.** Sampling bias

**B.** Automation bias

**C.** Confirmation bias

**D.** Survivorship bias

**Marked answer: B. Automation bias**

**Explanation:** Automation bias involves excessive reliance on an automated aid rather than appropriate critical assessment.

---

### 12 · Hard

Why can a dataset without names still permit re-identification?

**A.** Quasi-identifiers can link records with outside information

**B.** Removing names guarantees that every attribute is independent

**C.** Encrypting a file changes the statistical uniqueness of its rows

**D.** Aggregation preserves the exact location of each individual by definition

**Marked answer: A. Quasi-identifiers can link records with outside information**

**Explanation:** Combinations such as age, place and time can identify people when linked with other information.

---

### 13 · Hard

A platform pursues watch time as a substitute for user well-being. What is the central measurement risk?

**A.** The objective is determined by the units used to report time

**B.** The proxy's numerical form removes the need for a value judgment

**C.** The proxy and objective are identical by construction

**D.** The proxy can diverge from the intended objective

**Marked answer: D. The proxy can diverge from the intended objective**

**Explanation:** Optimizing a measurable target can differ from achieving the broader social goal it is meant to represent.

---

### 14 · Hard

A workplace uses software to allocate shifts and evaluate worker performance. Which concept is most directly relevant?

**A.** Lossless data compression

**B.** Participatory budgeting

**C.** Algorithmic management

**D.** Open-source licensing

**Marked answer: C. Algorithmic management**

**Explanation:** Algorithmic management uses automated systems to organize, monitor or evaluate work, with implications for authority and accountability.

---

### 15 · Hard

What distinguishes meaningful consent from a recorded click alone?

**A.** Authorization established by a preselected checkbox

**B.** Acceptance inferred from an unrelated service contract

**C.** Agreement measured by the number of words displayed

**D.** Understanding and a genuine relevant choice

**Marked answer: D. Understanding and a genuine relevant choice**

**Explanation:** The meaningfulness of consent depends on relevant understanding and voluntariness, not simply an interface event.

---

## History of Innovation

Quiz ID: `history-innovation`

### 01 · Easy

Which machine did Charles Babbage design as a general-purpose programmable engine?

**A.** Difference Engine

**B.** Analytical Engine

**C.** Pascaline

**D.** Jacquard Loom

**Marked answer: B. Analytical Engine**

**Explanation:** The Analytical Engine was a proposed programmable calculating machine; the Difference Engine had a more specialized purpose.

---

### 02 · Easy

Which printing technology is associated with Gutenberg's fifteenth-century European workshop?

**A.** Movable metal type

**B.** Laser toner printing

**C.** Rotary offset printing

**D.** Photographic lithography

**Marked answer: A. Movable metal type**

**Explanation:** Gutenberg's system combined movable metal type with related printing techniques; earlier movable-type traditions existed in East Asia.

---

### 03 · Easy

What did the electric telegraph chiefly accelerate?

**A.** The chemical preservation of food in sealed cans

**B.** Ocean travel by steam-powered ships

**C.** Long-distance transmission of coded messages

**D.** The mechanical harvesting of cereal crops

**Marked answer: C. Long-distance transmission of coded messages**

**Explanation:** Telegraph networks separated message speed from the speed of physical transport along routes.

---

### 04 · Easy

Which component largely displaced vacuum tubes in many electronic applications?

**A.** Electric relay

**B.** Floppy disk

**C.** Transistor

**D.** Optical fiber

**Marked answer: C. Transistor**

**Explanation:** Transistors enabled smaller, more efficient electronic circuits, although vacuum tubes remain useful in some applications.

---

### 05 · Easy

What did the World Wide Web add to the internet?

**A.** A hypertext system of linked resources

**B.** A replacement for every existing internet protocol

**C.** The first electrical signal sent through a wire

**D.** The first method for moving packets between computers

**Marked answer: A. A hypertext system of linked resources**

**Explanation:** The Web uses linked documents and related protocols on top of internet infrastructure.

---

### 06 · Medium

Why did the steam engine's impact depend on more than its initial invention?

**A.** A prototype supplied every later manufacturing tolerance

**B.** A patent fixed local fuel costs independently of supply

**C.** Manufacturing, fuel and applications developed together

**D.** A demonstration completed complementary transport systems

**Marked answer: C. Manufacturing, fuel and applications developed together**

**Explanation:** Widespread impact required improvements and supporting systems, not simply a single invention date.

---

### 07 · Medium

Which feature of the Jacquard loom influenced ideas about programmable machinery?

**A.** Semiconductor circuits storing textile instructions

**B.** Magnetic heads reading stored binary patterns

**C.** Punched cards controlling patterned operations

**D.** Radio receivers converting signals into keystrokes

**Marked answer: C. Punched cards controlling patterned operations**

**Explanation:** The loom's card-controlled patterns offered an influential example of external instructions directing machinery.

---

### 08 · Medium

What distinguished the transistor from a typical vacuum tube in early electronics?

**A.** It represented each logical state through magnetic orientation in a core

**B.** It amplified currents through thermionic emission across an evacuated space

**C.** It controlled a high-power circuit by moving a mechanical contact

**D.** It used semiconductor behavior rather than a heated vacuum device

**Marked answer: D. It used semiconductor behavior rather than a heated vacuum device**

**Explanation:** Transistors control current through semiconductor structures and offered major practical advantages in many contexts.

---

### 09 · Medium

Why were standardized interchangeable parts important to manufacturing?

**A.** They made each component depend on individual fitting to a particular product

**B.** They eliminated the need to define consistent dimensional tolerances

**C.** They allowed assembled machines to use parts of arbitrary shape and size

**D.** They supported assembly and repair across matched components

**Marked answer: D. They supported assembly and repair across matched components**

**Explanation:** Interchangeability depends on manufacturing consistency and tolerances, not simply producing many pieces.

---

### 10 · Medium

Which pair is associated with the development of TCP/IP?

**A.** Vint Cerf and Bob Kahn

**B.** Donald Davies and Paul Baran

**C.** Alan Turing and John von Neumann

**D.** Tim Berners-Lee and Robert Cailliau

**Marked answer: A. Vint Cerf and Bob Kahn**

**Explanation:** Cerf and Kahn helped develop the internetworking architecture underlying TCP/IP.

---

### 11 · Hard

Which network carried the 1969 host-to-host message between UCLA and SRI?

**A.** BITNET

**B.** ARPANET

**C.** NSFNET

**D.** CSNET

**Marked answer: B. ARPANET**

**Explanation:** ARPANET connected the early hosts; the other named research networks appeared later.

---

### 12 · Hard

What made containerization more than a new shape of shipping box?

**A.** The container kept each cargo type tied to a separate handling system

**B.** Standard interfaces linked ships, ports and inland transport

**C.** The box's shape removed the need to coordinate ships with inland transport

**D.** Its value depended on each shipping line selecting incompatible dimensions

**Marked answer: B. Standard interfaces linked ships, ports and inland transport**

**Explanation:** The system's efficiency relied on coordinated standards, handling equipment and transport networks.

---

### 13 · Hard

Why did railway networks encourage standardized timekeeping?

**A.** Timetables linked towns using different local solar times

**B.** Steam engines required identical boiler temperatures at every station

**C.** Railway gauges changed with each town's longitude

**D.** Mechanical clocks could not display local time after a train departed

**Marked answer: A. Timetables linked towns using different local solar times**

**Explanation:** Coordinating long-distance schedules increased the practical need for shared time standards.

---

### 14 · Hard

What distinguishes an invention from diffusion of that invention?

**A.** The replacement of a technical standard by an incompatible one

**B.** The creation of a new technical principle before any working use

**C.** The legal registration of an invention's exclusive patent rights

**D.** Creating a technique versus its spread and adoption

**Marked answer: D. Creating a technique versus its spread and adoption**

**Explanation:** Diffusion concerns how a technique spreads through users and settings, which can be uneven and require adaptation.

---

### 15 · Hard

Why can a technology's later uses differ from its creators' intentions?

**A.** Successful designs cannot combine with other inventions

**B.** New users and institutions adapt its possibilities

**C.** Initial intentions fix subsequent institutional use

**D.** A patent describes every later social application

**Marked answer: B. New users and institutions adapt its possibilities**

**Explanation:** Technologies evolve through use, combination and institutional choices, not solely through initial design intentions.

---

