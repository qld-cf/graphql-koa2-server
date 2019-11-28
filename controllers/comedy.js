import mongoose from 'mongoose'

const Comedy = mongoose.model('Comedy')

export const saveComedy = async (ctx, next) => {
  const opts = ctx.request.body

  const comedy = new Comedy(opts)
  const saveComedy = await comedy.save()

  if (saveComedy) {
    ctx.body = {
      success: true,
      data: saveComedy
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

export const fetchComedy = async (ctx, next) => {
  const comedy = await Comedy.find({})

  if (comedy.length) {
    ctx.body = {
      success: true,
      data: comedy
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

