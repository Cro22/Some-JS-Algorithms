const pushDominoes = function (dominoes) {
    let A = dominoes;
    let N = A.length;
    let forces = Array(N).fill(0);

    let force = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] == 'R') {
            force = N;
        }
        else if (A[i] == 'L') {
            force = 0;
        }
        else {
            force = Math.max(force - 1, 0);
        }
        forces[i] += force;
    }
    force = 0;
    for (let i = N - 1; i >= 0; i--) {
        if (A[i] == 'L') {
            force = N;
        } else if (A[i] == 'R') {
            force = 0;
        } else {
            force = Math.max(force - 1, 0);
        }
        forces[i] -= force;
    }

    let ans = "";
    for (let f of forces) {
        ans += f > 0 ? 'R' : (f < 0 ? 'L' : '.');
    }
    return ans;
};
console.log(pushDominoes(".L.R...LR..L.."));
console.log(pushDominoes("RR.L"));
console.log(pushDominoes("..R.."));
console.log(pushDominoes("RL"));