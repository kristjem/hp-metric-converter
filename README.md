# HP - metric converter

### This module helps you convert HP to or from mm

HP is Short for *Horizontal Pitch*. In the Eurorack format for synthesizer modules, the width of a module is defined as the number of hp (horizontal pitch) units. Each hp is 0.2” (5.08 mm). Most modules are even numbers of hp wide, although some are odd numbers
<br><br>
-*source LearningModular.com* 

*This repo was made mainly to learn how to publish a package to NPM.*

## Install

```
npm install hp-metric-converter
```

## USAGE
#### Loading the library
```
const eurorack = require('hp-metric-converter');
```

#### HP to metric
**`let metric = eurorack.convertHpToMm(value)`**<br>

Example:
```
let mm = eurorack.convertHpToMm(5)
```

#### Metric to HP
**`let hp = eurorack.convertMmToHp(value)`**<br>

Example:
```
let hp = eurorack.convertMmToHp(400)
```

## Test

```
npm test
```
License ISC