## Fairness

### How Are the Results Calculated?

To get the results.

We calculate the hash value of the combination with HMAC_SHA256. This gives us a 64-character hexadecimal string: hash = HMAC_SHA256 (clientSeed:nonce, serverSeed).
