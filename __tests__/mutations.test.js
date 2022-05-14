import mutations from '../src/store/mutation'

const mockedState = {
  user: null,
  fetchingData: false,
  error: null,
  boards: {},
  lists: {},
  tasks: {}
}

const boardsMock = {
  '-N1yiTtyjmIE4FY6TkoO': {
    'id': '-N1yiTtyjmIE4FY6TkoO',
    'name': 'test',
    'owner': 1
  }
}

describe('Testing mutations', () => {
  it('should change fetchingData state when we fetch boards', () => {
    mutations.FETCH_BOARDS_REQUEST(mockedState)
    expect(mockedState.error).toBe(true)
  })

  it('should change error state when fail while fetching data', () => {
    mutations.FETCH_BOARDS_FAILURE(mockedState, { error: 'error' })
    expect(mockedState.fetchingData).toBe(false)
    expect(mockedState.error).toEqual('error')
  })

  it('should change boards state when we end fetching boards', () => {
    mutations.FETCH_BOARDS_SUCCESS(mockedState, {boards: boardsMock})
    expect(mockedState.fetchingData).toBe(false)
    expect(mockedState.boards).toEqual(boardsMock)
  })

  it('should change fetchingData state when we fetch boards', () => {
    mockedState.boards = boardsMock

    mutations.DELETE_BOARD(mockedState, {boardId: '-N1yiTtyjmIE4FY6TkoO'})
    expect(mockedState.boards).toBe({})
  })
})
